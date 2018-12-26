	const initialState = {
	editingOn: false,
	searchIsOn: false,
	signUp: false,
	loggingIn: false,
	loggedIn: false, 
	searchTerm: '',
	currentPage: {},
	username: ''
}




export default function nbaReducer(state=initialState, action){
	if(action.type === 'SEARCH_PAGES'){
		
		return Object.assign({}, state, {
			searchIsOn: true,
			currentPage: action.page
		})
	}

	if(action.type === 'STORE_SEARCH_TERM') {
		return Object.assign({}, state, {
			searchTerm: action.searchTerm
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

	if(action.type === 'LOGOUT') {
		return Object.assign({}, state, {
			loggedIn: false
		})
	}

	if(action.type === 'LOAD_PAGE') {
		return Object.assign({}, state, {
			loggedIn: true, 
			username: action.username
		})
	}

	if(action.type === 'COMPLETE_LOGIN') {
		return Object.assign({}, state, {
			loggedIn: true,
			username: action.username,
			loggingIn: false,
			signUp: false, 
			searchIsOn: false,
			editingOn: false
		})
	}

	if(action.type === 'EDIT_PAGE') {
		return Object.assign({}, state, {
			editingOn: true
		})
	}

	if(action.type === 'STOP_EDIT') {
		return Object.assign({}, state, {
			editingOn: false
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