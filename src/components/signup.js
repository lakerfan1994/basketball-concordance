import React from 'react'
import {connect} from 'react-redux';
import BackButton from './backbutton';
import {API_URL} from '../config';
import './signup.css';
import {completeLogin} from '../actions';

console.log(API_URL);

export class Signup extends React.Component{


onClick(event) {
	event.preventDefault();
	let _username = this.username.value;
	_username = _username.trim();
	let readyToBeSent = true;

	let goodUsername = _username.replace(/[^a-zA-Z ]/g, "");
	if(_username !== goodUsername) {
		document.getElementById('password-length-error').style.display = 'none';
		document.getElementById('no-special-characters').style.display = 'block';
		document.getElementById('username-already-exists').style.display = 'none';
		readyToBeSent = false;
	}

	let _password = this.password.value;
    _password = _password.trim();
    if(_password.length < 10 || _password.length > 72 || _username.length > 15) {
    	document.getElementById('no-special-characters').style.display = 'none';
      	document.getElementById('password-length-error').style.display = 'block';
      	document.getElementById('username-already-exists').style.display = 'none';
      	readyToBeSent = false;
	}

	if(readyToBeSent) {

		//questinon. D you really need box shadow in the program, if it s actually needed make
			fetch(`${API_URL}users`, {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({username: _username, password: _password })
			})
			.then(res => {
				console.log(res);
				if(!res.ok) {
				document.getElementById('username-already-exists').style.display = 'block';
				document.getElementById('no-special-characters').style.display = 'none';
				document.getElementById('password-length-error').style.display = 'none';
				return
				}

				fetch(`${API_URL}/auth`, {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({username: _username, password: _password })
				})
				.then(res => {
					return res.json();
				})
				.then(token => {
					let jwtToken = token.authToken
					localStorage.setItem("authToken", jwtToken);
					localStorage.setItem("username", token.username);
					this.props.dispatch(completeLogin(token.username));
				})
				.catch(err => {
					console.log(err);
				})
			})
			.catch(err => {
				console.log(err);
			})
		}
	



}

  

  render() {
	  return (
	  	<div className='row'>
		    <form className="col-6 page-form" onSubmit={e => this.onClick(e)}>
		    <h2 className='centered-text'>{this.props.name}</h2>
		    <h3 className='centered-text'>Sign Up Now!</h3>
		    <div id="no-special-characters" className='error-message hidden'>
		   		<span> You cant contain special characters or numbers in your username</span>
		    </div>
		    <div id="password-length-error" className='error-message hidden'>
		   		<span>Your password must be at least 10 characters and less than 72 characters and your username cannot be longer than 15 characters</span>
		    </div>
		    <div id="username-already-exists"className='error-message hidden'>
		    	<span>This username is already taken. Please select another one</span>
		    </div>

		      <div className='page-child'>
		        <label htmlFor="username">Username</label>
		        <input ref ={username => (this.username = username)} name="username" type="text" required />
		      </div>
		      <div className='page-child'>
		        <label htmlFor="password">Password</label>
		        <input ref ={password => (this.password = password)} name="password" type="text"  required/>
		      </div>
		      <div className="centered-text ">
		      	<button className='submit-button' type="submit">Submit</button>
		        <BackButton />
		      </div>
		    </form>
	    </div>
	  )
	}
}


export default connect()(Signup);