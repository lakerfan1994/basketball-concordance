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
import {searchPages} from '../actions';

import './homepage.css';
import '../grid.css';

export class Homepage extends React.Component {
	
	onSubmit(textInput) {
		textInput = textInput.trim().toLowerCase();
		this.props.dispatch(searchPages(textInput));
		//dispatch this action check to see if the search is there, if it is you redirect them to a new page based on the search term
		//if search is on you render a different page with the search element insteead
	}
// create a back button commponent that takes you back to the home page by taking off all the cursury tags
		render() {
			if(this.props.signUp === true){
				return (
					<Signup name={this.props.appName} />
				)
			}

			if(this.props.loggingIn === true) {
				return (
					<Login name={this.props.appName} /> 
				)
			}


			if(this.props.searchIsOn === false) {
			return (
				<div>
					<Navbar name={this.props.appName} />
				<Searchbar onClick={search => this.onSubmit(search)} name={this.props.searchBarName} description={this.props.searchBarDesc}
					label={this.props.searchBarLabel} placeholder={this.props.searchBarPlaceholder} />		
			</div>)
		}
		if(this.props.currentPage === undefined) {
			return(
				<div>
				<ArticleStub loggedIn={this.props.loggedIn} searchTerm={this.props.searchTerm} />
				<BackButton />
				</div>
			)
		}

		return(
			<Page title={this.props.currentPage.title} summary={this.props.currentPage.summary}
			 sections={this.props.currentPage.sections} />
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
	signUp: state.nba.signUp,
	loggingIn: state.nba.loggingIn,
	loggedIn: state.nba.loggedIn,
	searchTerm: state.nba.searchTerm,
	pages: state.nba.pages,
	searchIsOn: state.nba.searchIsOn,
	currentPage: state.nba.currentPage
})

export default connect(mapStateToProps)(Homepage);


	