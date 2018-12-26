import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import BackButton from './backbutton';
import {API_URL} from '../config';
import {stopEdit} from '../actions';

import './addNewPage.css'


export class AddNewPage extends React.Component {

	constructor(props) {
		super(props);
		this.title = '';
		this.summary = '';
		this.secName1 ='';
		this.secText1 = '';
		this.secName2 ='';
		this.secText2 = '';
		this.secName3 ='';
		this.secText3 = '';
	}


	onSubmit(event) {

		event.preventDefault();

			const newPage = {title: this.title.value, summary: this.summary.value, 
				sections: [{title: this.secName1.value, text: `${this.secText1.value}` }, {title: this.secName2.value, text: this.secText2.value }, {title: this.secName3.value, text: this.secText3.value }]};

		if(!(this.props.currentPage.summary === '')) {
			fetch(`${API_URL}/pages`, {
				method: "PUT",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(newPage)
			})
			.then(res => {
				return res.json();
			})
			.then(page => {
				this.props.dispatch(stopEdit());
				this.props.runSearchAgain(page.title);
			})
			.catch(err => {
				console.log(err)
			})
		}
		else {	
			fetch(`${API_URL}/pages`, {
	        method: "POST", // *GET, POST, PUT, DELETE, etc.
	        headers: {"Content-Type": "application/json"}, 
	        body: JSON.stringify(newPage) // body data type must match "Content-Type" header
		    })
		    .then(res => {
		    	return res.json();
		    })
			.then(page => {
				this.props.dispatch(stopEdit());
				this.props.runSearchAgain(page.title);
			})
			.catch(err => {
				console.log('it is not working at all');
			})
		}
	}


  render() {
  	  const startOfForm = 
  	 	 <div>
 		  <div className='page-child'>
	        <label htmlFor="title">Title</label>
	        <input name="title" type="text" defaultValue={this.props.currentPage.title} ref ={title => (this.title = title)}  required />
	      </div>
	      <div className='page-large-child'>
	        <label htmlFor="summary">Summary</label>
	        <textarea name="summary" rows='8'  ref ={summary => (this.summary = summary)} defaultValue={this.props.currentPage.summary} required/>
	      </div>
	 	 </div>;	
	  const endOfForm = <div>
	  	<div className='page-child'>
	        <label htmlFor="section-title-1">Section 1 Title</label>
	        <input ref ={section => (this.secName1 = section)} defaultValue={this.props.currentPage.sections[0].title} name="section-title"  type="text"   required/>
	      </div>
	       <div className='page-large-child'>
	        <label htmlFor="section-text-1">Section 1 Text</label>
	        <textarea ref ={text => (this.secText1 = text)}  name="section-text" rows='8' defaultValue={this.props.currentPage.sections[0].text}  required/>
	      </div>
	      <div className='page-child'>
	        <label htmlFor="section-title-2">Section 2 Title</label>
	        <input ref ={section => (this.secName2 = section)} name="section-title" type="text" defaultValue={this.props.currentPage.sections[1].title}   required/>
	      </div>
	       <div className='page-large-child'>
	        <label htmlFor="section-text-2">Section 2 Text</label>
	        <textarea ref ={text => (this.secText2 = text)} name="section-text" rows='8' defaultValue={this.props.currentPage.sections[1].text}  required/>
	      </div>
	      <div className='page-child'>
	        <label htmlFor="section-title-3">Section 3 Title</label>
	        <input ref ={section => (this.secName3 = section)} name="section-title" type="text" defaultValue={this.props.currentPage.sections[2].title}  required/>
	      </div>
	       <div className='page-large-child'>
	        <label htmlFor="section-text-3">Section 3 Text</label>
	        <textarea ref ={text => (this.secText3 = text)} name="section-text" rows='8'  defaultValue={this.props.currentPage.sections[2].text} required/>
	      </div>
	      </div>



  return (

  	<div className='row'>
	    <form className="col-6 add-new-page-form" onSubmit= {e => this.onSubmit(e)}>
	    	<h2 className='centered-text'>Create a new page!</h2>
	    	{startOfForm}	
	    	{endOfForm}
	      <button className='submit-button' type="submit">Submit</button>
	      <BackButton />
	    </form>
    </div>
  )
}
}


const mapStateToProps = state => ({
	currentPage: state.nba.currentPage
})



export default connect(mapStateToProps)(AddNewPage);