import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './addNewPage.css'

let AddNewPage = props => {
  const { handleSubmit } = props
  return (
  	<div className='row'>
	    <form className="col-6 page-form" onSubmit={handleSubmit}>
	      <div className='page-child'>
	        <label htmlFor="title">Title</label>
	        <Field name="title" component="input" type="text" required />
	      </div>
	      <div className='page-large-child'>
	        <label htmlFor="summary">Summary</label>
	        <Field name="summary" component="textarea" type="textarea" rows='8' required/>
	      </div>
	       <div className='page-child'>
	        <label htmlFor="section-title">Name</label>
	        <Field name="section-title" component="input" type="text"  required/>
	      </div>
	       <div className='page-child'>
	        <label htmlFor="section-text">Type your text here</label>
	        <Field name="section-text" component="textarea" type="textarea" rows='8'  required/>
	      </div>

	      <button className='submit-button page-small-child' type="submit">Submit</button>
	    </form>
    </div>
  )
}

AddNewPage = reduxForm({
  // a unique name for the form
  form: 'addNewForm'
})(AddNewPage)

export default AddNewPage