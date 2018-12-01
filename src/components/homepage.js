import React from 'react';
import{connect} from 'react-redux';
import Navbar from './navbar';
import Searchbar from './searchbar';
import ArticleStub from './articlestub';
import Page from './page';
import AddNewPage from './addNewPage';
import './homepage.css';
import '../grid.css';

export default function Homepage(props) {



	return (
		<div>
		<AddNewPage />
	</div>)
}


	// <Navbar name='The Basketball Concordance' />
		// <Searchbar name='Basketball Concordance' description='Further your knowledge on the minutiae of basketball'
		// 	label='Search here for anything basketball' placeholder='Ex. Lakers' />


		// <ArticleStub loggedIn={false} searchTerm='ballshit' />

		// <Page title='The Los Angeles Lakers' summary="Just work" sections={[{title: 'Lakdasers', text: 'lmaobinsco'}, {title: 'Lolakers', text: 'chimichangachimirun' }]} />