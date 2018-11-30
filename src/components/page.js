import React from 'react';
import {connect} from 'react-redux';
import Section from './section';
import './page.css';
import '../grid.css';

export default function Page(props) {
	const contentBar = props.sections.map((section, index) => (
		<li key={index}>
			{index}: <a href="">{section.title}</a>
		</li> 
		)
	)

	const sectionsWrapper = props.sections.map(section => (
		<Section title={section.title} text={section.text} />
		)
	)

	return(
	<div class="page-found row">
		<div class="title-shot">
			<h1>{props.title}</h1>
		</div>
		<div class= "summary-content">
			<div class="content-bar col-3 centered-text">
				<h4>Contents</h4>
				<ul>
					{contentBar}
				</ul>
			</div>
			<div class= "summary">
				<span>
					{props.summary}
				</span>
			</div>
		</div>
		{sectionsWrapper}
	</div>
	)


}

Page.defaultProps = {
	sections: [1,2]
}