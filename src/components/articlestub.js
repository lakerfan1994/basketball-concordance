import React from 'react';
import {connect} from 'react-redux';
import SignupButton from './signupbutton';
import LoginButton from './loginbutton';
import EditPage from './editpage';
import {editPage} from '../actions';
import './articlestub.css';


export function ArticleStub(props) {
	if(props.loggedIn) {
	return(
		<div class="not-found-page row centered-text">
		<div class="not-found-message col-4">
			<strong>Sorry, the page {props.searchTerm} does not exist. You can be
			 the first to create the page by clicking <EditPage /></strong>
		</div>
	</div>
	)
}

return(
	<div class="not-found-page row centered-text">
		<div class="not-found-message col-4">
			<strong>Sorry, the page {props.searchTerm} does not 
			exist. <SignupButton /> or <LoginButton /> to edit the page</strong>
		</div>
	</div>

)

}


ArticleStub.defaultProps = {
	loggedIn: false
}


export default connect()(ArticleStub);