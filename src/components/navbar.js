import React from 'react';
import {connect} from 'react-redux';
import SignupButton from './signupbutton';
import LoginButton from './loginbutton';
import './navbar.css';
import '../grid.css';

export default function Navbar(props) {
	return(
		<nav className= "homepage-navbar">
			<div className= "homepage-navbar-child centered-text">
				<strong>{props.name}</strong>
			</div>
			<div className= "homepage-navbar-child centered-text">
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