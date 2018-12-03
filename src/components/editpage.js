import React from 'react';
import {connect} from 'react-redux';
import {editPage} from '../actions';


export function EditPage(props) {
	return(
		<a href="" onClick={(e) => {e.preventDefault();
			props.dispatch(editPage());} }>here</a>
	)
}


export default connect()(EditPage);