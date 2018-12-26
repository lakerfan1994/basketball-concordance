import React from 'react'
import {connect} from 'react-redux';
import BackButton from './backbutton';
import {completeLogin} from '../actions';
import {API_URL} from '../config';
import './login.css';

export class Login extends React.Component {


		onClick(event) {
			event.preventDefault();
			fetch(`${API_URL}/auth`, {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({username: this.username.value, password: this.password.value })
			})
			.then(res => {
				if(!(res.ok)){
					document.getElementById('invalid-entry').style.display = 'block';
				    return
				}
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

		}



		render() {
		  return (
		  	<div className='row'>
			    <form className="col-6 page-form" onSubmit={e => this.onClick(e)}>
			    <h2 className='centered-text'>{this.props.name}</h2>
			    <h3 className='centered-text'>Login</h3>
			    <div id="invalid-entry" className='error-message hidden'>
		   			<span>Invalid username or password, please try again</span>
		    	</div>
			      <div className='page-child'>
			        <label htmlFor="username">Username</label>
			        <input ref ={username => (this.username = username)} name="username" type="text" required />
			      </div>
			      <div className='page-child'>
			        <label htmlFor="password">Password</label>
			        <input ref ={password => (this.password = password)} name="password" type="password"  required/>
			      </div>
			      <div className="centered-text">
			     	 <button className='submit-button' type="submit">Submit</button>
			     	 <BackButton /> 
			      </div>
			    </form>
		    </div>
		  )
		}
}


export default connect()(Login)