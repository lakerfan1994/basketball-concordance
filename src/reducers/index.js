const initialState = {
	editingOn: false,
	searchIsOn: false,
	signUp: false,
	loggingIn: false,
	loggedIn: true, 
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

	if(action.type === 'SIGN_UP') {
		return Object.assign({}, state, {
			signUp: true
		})
	}

	if(action.type === 'LOGIN') {
		return Object.assign({}, state, {
			loggingIn: true
		})
	}

	if(action.type === 'EDIT_PAGE') {
		console.log(state.editingOn)
		return Object.assign({}, state, {
			editingOn: true
		})
	}

	if(action.type === 'RETURN_TO_HOME') {
		return Object.assign({}, state, {
			loggingIn: false,
			signUp: false, 
			searchIsOn: false,
			editingOn: false
		})
	}

	return state;
}