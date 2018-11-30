import React from 'react';
import {connect} from 'react-redux';


export default function SearchBar(props) {
	return(
		<div className="row centered-text ">
			<div className="main-search col-6 ">
				<h1>{props.name}</h1>
				<h3>{props.description}</h3>
				<div className= "search-bar-wrapper">
					<label for='main-search-bar'>{props.label}</label>
					<input id='main-search-bar' class="main-search-bar" type="search"placeholder={props.placeholder} />
				</div>
			</div>
		</div>
	)
}


