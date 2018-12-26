import React from 'react';
import {connect} from 'react-redux';
import './searchbar.css'


export class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.input = '';
	}

	render() {
		return(
			<div className="row centered-text ">
				<form className="main-search col-6"  onSubmit={e => {e.preventDefault(); this.props.onClick(this.input.value);}}>
					<h1>{this.props.name}</h1>
					<h3>{this.props.description}</h3>
					<div className= "search-bar-wrapper">
						<label for='main-search-bar'>{this.props.label}</label>
						<div className='flex-bar-wrapper'>
						<input id='main-search-bar' class="main-search-bar" ref ={input => (this.input = input)} type="search"placeholder={this.props.placeholder} />
						<button type='submit'> Search </button>  
						</div>
					</div>
				</form>
			</div>
		)
	}
}

//maybe what you want to do when you come back is make this just update the state from here



export default connect()(SearchBar);


