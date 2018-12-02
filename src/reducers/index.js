


const initialState = {
	searchIsOn: false,
	loggedIn: false, 
	searchTerm: '',
	pages: [
		{
			title: 'Lakers',
			searchQueries: ['lakers', 'los angeles lakers'],
			summary: 'yada ya ddasaslsin',
			sections: [{title: 'lakers did this', text: 'yahushausksfhusduahsksah'}, {title: 'lakers did this too', text: 'yassjdjkadskhashsahkashka'}]
		}
	],
	currentPage: {}
}




export default function nbaReducer(state=initialState, action){
	if(action.type === 'SEARCH_PAGES'){
		let newCurrentPage =state.pages.find(page => {
			for(let i = 0; i < page.searchQueries.length; i++){
				if(page.searchQueries[i] === action.searchTerm) {
					return true;
				}
			}
			return false;
		});
		return Object.assign({}, state, {
			searchTerm: action.searchTerm,
			searchIsOn: true,
			currentPage: newCurrentPage
		})
	}

	return state;
}