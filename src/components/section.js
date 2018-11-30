import React from 'react';
import {connect} from 'react-redux';
import './section.css';



export default function Section(props) {
	return(
		<div class='section-content'>
			<div class="section-title">
				<h2>{props.title}</h2>
			</div>
			<div class='section-text'>
				<span>{props.text}</span>
			</div>	
		</div>
	)
}