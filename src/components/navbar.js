import React from 'react';
import {connect} from 'react-redux';
import SignupButton from './signupbutton';
import LoginButton from './loginbutton';
import LogoutButton from './logoutbutton';
import './navbar.css';
import '../grid.css';

export default function Navbar(props) {
	if(props.loggedIn) {
		return(
		<nav className= "homepage-navbar">
			<div className= "homepage-navbar-child centered-text not-on-small-screens">
				<strong>{props.name}</strong>
			</div>
			<div className= "homepage-navbar-child centered-text not-on-small-screens">
			</div>	
			<div class= "homepage-navbar-child centered-text">
				<strong>Welcome {props.username}</strong>
			</div>
			<div class= "homepage-navbar-child centered-text">
				<LogoutButton />
			</div>
		</nav>
		)
	}
	
	return(
		<nav className= "homepage-navbar">
			<div className= "homepage-navbar-child centered-text not-on-small-screens">
				<strong>{props.name}</strong>
			</div>
			<div className= "homepage-navbar-child centered-text not-on-small-screens">
			</div>	
			<div class= "homepage-navbar-child centered-text">
				<SignupButton />
			</div>
			<div class= "homepage-navbar-child centered-text">
				<LoginButton />
			</div>
		</nav>
	)
}



