import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import BackButton from './backbutton';
import { Field, reduxForm } from 'redux-form'
import './addNewPage.css'

let AddNewPage = props => {
  const startOfForm = <div>
  <div className='page-child'>
	        <label htmlFor="title">Title</label>
	        <Field name="title" component='Input' type="text" value={props.title} required />
	      </div>
	      <div className='page-large-child'>
	        <label htmlFor="summary">Summary</label>
	        <Field name="summary" component="textarea" type="textarea" rows='8' defaultValue={props.summary} required/>
	      </div>
	      </div>;	

  const { handleSubmit } = props
  return (

  	<div className='row'>
	    <form className="col-6 add-new-page-form" onSubmit={handleSubmit}>
	    	<h2 className='centered-text'>Create a new page!</h2>
	    	{startOfForm}	
	    	<div className='page-child'>
	        <label htmlFor="section-title-1">Section 1</label>
	        <Field name="section-title" component="input" type="text"   required/>
	      </div>
	       <div className='page-large-child'>
	        <label htmlFor="section-text-1">Type your text here</label>
	        <Field name="section-text" component="textarea" type="textarea" rows='8'  required/>
	      </div>
	      <div className='page-child'>
	        <label htmlFor="section-title-2">Section 2</label>
	        <Field name="section-title" component="input" type="text"   required/>
	      </div>
	       <div className='page-large-child'>
	        <label htmlFor="section-text-2">Type your text here</label>
	        <Field name="section-text" component="textarea" type="textarea" rows='8'  required/>
	      </div>
	      <div className='page-child'>
	        <label htmlFor="section-title-3">Section 3</label>
	        <Field name="section-title" component="input" type="text"   required/>
	      </div>
	       <div className='page-large-child'>
	        <label htmlFor="section-text-3">Type your text here</label>
	        <Field name="section-text" component="textarea" type="textarea" rows='8'  required/>
	      </div>
	      <button className='submit-button' type="submit">Submit</button>
	      <BackButton />
	    </form>
    </div>
  )
}


const mapStateToProps = state => ({
	
})


AddNewPage = reduxForm({
  // a unique name for the form
  form: 'addNewForm'
})(AddNewPage)

export default connect(mapStateToProps)(AddNewPage);