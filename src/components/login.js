import React from 'react'
import { Field, reduxForm } from 'redux-form';
import './login.css';

let Login = props => {
  const { handleSubmit } = props
  return (
  	<div className='row'>
	    <form className="col-6 page-form" onSubmit={handleSubmit}>
	    <h2 className='centered-text'>{props.name}</h2>
	    <h3 className='centered-text'>Login</h3>
	      <div className='page-child'>
	        <label htmlFor="username">Username</label>
	        <Field name="username" component="input" type="text" required />
	      </div>
	      <div className='page-child'>
	        <label htmlFor="password">Password</label>
	        <Field name="password" component="input" type="password"  required/>
	      </div>
	      <div className="centered-text">
	      <button className='submit-button' type="submit">Submit</button>
	      </div>
	    </form>
    </div>
  )
}

Login = reduxForm({
  form: 'Login'
})(Login)

export default Login