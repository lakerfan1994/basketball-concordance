import React from 'react';
import {connect} from 'react-redux';
import Section from './section';
import SignupButton from './signupbutton';
import LoginButton from './loginbutton';
import EditPage from './editpage';
import './page.css';
import '../grid.css';

export default function Page(props) {
	const contentBar = props.sections.map((section, index) => (
		<li key={index}>
			{index + 1}: <a href="">{section.title}</a>
		</li> 
		)
	)

	let footerInfo = <div className='page-footer centered-text'><strong><SignupButton /> or <LoginButton /> to edit the page</strong>
	</div>

	if(props.loggedIn === true) {
		footerInfo=<div className='page-footer centered-text'><strong>Click <EditPage /> to edit the page if it needs more info</strong>
		</div>
	}


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
		{footerInfo}
	</div>
	)


}

Page.defaultProps = {
	sections: [1,2]
}