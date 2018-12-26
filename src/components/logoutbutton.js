 import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions';



export function LogoutButton(props) {
	return(
		<a href="" onClick={(e) => {e.preventDefault();
			localStorage.removeItem('authToken');
			localStorage.removeItem('username');
			props.dispatch(logout());} }>Logout</a>
	)
}

export default connect()(LogoutButton);