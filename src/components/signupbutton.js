import React from 'react';
import {connect} from 'react-redux';
import {signUp} from '../actions';


export function SignupButton(props) {
	return(
		<a href="" onClick={(e) => {e.preventDefault();
			props.dispatch(signUp());} }>Sign Up</a>
	)
}


export default connect()(SignupButton);