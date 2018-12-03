import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';



export function LoginButton(props) {
	return(
		<a href="" onClick={(e) => {e.preventDefault();
			props.dispatch(login());} }>Login</a>
	)
}

export default connect()(LoginButton);