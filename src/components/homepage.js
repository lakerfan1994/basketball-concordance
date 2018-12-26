import React from 'react';
import{connect} from 'react-redux';
import Navbar from './navbar';
import Searchbar from './searchbar';
import ArticleStub from './articlestub';
import Page from './page';
import AddNewPage from './addNewPage';
import Login from './login';
import Signup from './signup';
import BackButton from './backbutton';
import {searchPages, storeSearchTerm, loadPage} from '../actions';
import {API_URL} from '../config';

import './homepage.css';
import '../grid.css';

//When you come back, dont worry abbout the lack of connectin to your heroku app,, focus on finding good places to put the ack 
//button s it that it works with the rest of the application, then once you have established good places to put the back button,
//you make sure that the page used to create new pages is actually working properly. Not just in design, but to the point 
//that the login and signup pages are working. Ok lets get it. Meh i can type a little more just to seem impressive, does this work
//not really but illl keep going

export class Homepage extends React.Component {
	
	onSubmit(textInput) {
		this.props.dispatch(storeSearchTerm(textInput));
		console.log(`${API_URL}/pages/${textInput}`);
		fetch(`${API_URL}/pages/${textInput}`)
		.then(res => {
			return res.json();	
		})
		.then(page => {
			this.props.dispatch(searchPages(page));
		})
		.catch(err => {
			console.log(err);
		})
		
		//dispatch this action check to see if the search is there, if it is you redirect them to a new page based on the search term
		//if search is on you render a different page with the search element insteead
	}
// create a back button commponent that takes you back to the home page by taking off all the cursury tags
		render() {

			if(localStorage.getItem('authToken')) {
				this.props.dispatch(loadPage(localStorage.getItem('username')));
			}

			if(this.props.signUp === true){
				return (
					<div className='main-page-shaded'>
					<Signup name={this.props.appName} />
					</div>
				)
			}

			if(this.props.loggingIn === true) {
				return (
					<div className='main-page-shaded'>
						<Login name={this.props.appName} />
					</div> 
				)
			}

			if(this.props.editingOn === true ) {
				if(this.props.currentPage === undefined) {
					return(
						<div className='black-background'>
							<AddNewPage runSearchAgain={search => this.onSubmit(search)} />
						</div>
					)
				}
				return(
					<div className='black-background'>
						<AddNewPage runSearchAgain={search => this.onSubmit(search)} title={this.props.currentPage.title} summary={this.props.currentPage.summary} sections={
						this.props.currentPage.sections} />
					</div>
				)
			}


			if(this.props.searchIsOn === false) {
			return (
				<div className='main-page'>
					<Navbar name={this.props.appName} loggedIn={this.props.loggedIn} username={this.props.username}/>
				<Searchbar onClick={search => this.onSubmit(search)} name={this.props.searchBarName} description={this.props.searchBarDesc}
					label={this.props.searchBarLabel} placeholder={this.props.searchBarPlaceholder} />		
			</div>)
		}
		if(this.props.currentPage.summary === '') {
			return(
				<div>
				<ArticleStub loggedIn={this.props.loggedIn} searchTerm={this.props.searchTerm} />
				<BackButton />
				</div>
			)
		}

		//when you come back, take off thee prop of basketeball concordance on the top oleft, then 

		return(
			<div>
			<Page title={this.props.currentPage.title} summary={this.props.currentPage.summary} loggedIn={this.props.loggedIn}
			 sections={this.props.currentPage.sections} />
			 <BackButton />
			 </div>
		)
	}
}

Homepage.defaultProps = {
	appName: 'The Basketball Concordance',
	searchBarName: 'The Basketball Concordance',
	searchBarDesc: "Further your knowledge on anything basketball",
	searchBarLabel: "Search here",
	searchBarPlaceholder: "Ex. Lakers"
}

const mapStateToProps = state => ({
	appName : state.nba.appName,
	searchBarName: state.nba.searchBarName,
	searchBarDesc: state.nba.searchBarDesc,
	searchBarLabel: state.nba.searchBarLabel,
	searchBarPlaceholder: state.nba.searchBarPlaceholder,
	editingOn: state.nba.editingOn,
	signUp: state.nba.signUp,
	loggingIn: state.nba.loggingIn,
	loggedIn: state.nba.loggedIn,
	searchTerm: state.nba.searchTerm,
	searchIsOn: state.nba.searchIsOn,
	currentPage: state.nba.currentPage,
	username: state.nba.username
})

export default connect(mapStateToProps)(Homepage);


	