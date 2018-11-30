import React from 'react';
import {connect} from 'react-redux';


export default function LoginButton(props) {
	return(
		<a href="">{props.name}</a>
	)
}

LoginButton.defaultProps = {
	name: 'Login'
};