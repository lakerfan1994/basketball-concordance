
export const SEARCH_PAGES = 'SEARCH_PAGES';
export const searchPages = page => ({
	type: SEARCH_PAGES,
	page
});

export const STORE_SEARCH_TERM = 'STORE_SEARCH_TERM';
export const storeSearchTerm = searchTerm => ({
	type: STORE_SEARCH_TERM,
	searchTerm
})

export const SIGN_UP ='SIGN_UP';
export const signUp = () => ({
	type: SIGN_UP
});



export const LOGIN = 'LOGIN'
export const login = () => ({
	type: LOGIN
});

export const LOGOUT = 'LOGOUT'
export const logout = () => ({
	type: LOGOUT
})

export const COMPLETE_LOGIN = 'COMPLETE_LOGIN'
export const completeLogin = username => ({
	type: COMPLETE_LOGIN,
	username
})

export const RETURN_TO_HOME = 'RETURN_TO_HOME';
export const returnToHome = () => ({
	type: RETURN_TO_HOME
});

export const EDIT_PAGE = 'EDIT_PAGE';
export const editPage = () => ({
	type: EDIT_PAGE
})

export const STOP_EDIT = "STOP_EDIT";
export const stopEdit = () => ({
	type: STOP_EDIT
})

export const LOAD_PAGE = 'LOAD_PAGE';
export const loadPage = username => ({
	type: LOAD_PAGE,
	username
})