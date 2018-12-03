import React from 'react';
import {connect} from 'react-redux';
import {returnToHome} from '../actions';
import './backbutton.css';

//when back, coonnect and dispatch this method from this button, then start working on finding a way to place ethis button in p
//places where it cna do actual work
export function BackButton(props) {
	return(
		<button className='back-button' href="" onClick={(e) => {e.preventDefault();
			props.dispatch(returnToHome());} }>Back</button>
	)
}


export default connect()(BackButton);