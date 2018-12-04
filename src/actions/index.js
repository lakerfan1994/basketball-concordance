
export const SEARCH_PAGES = 'SEARCH_PAGES';
export const searchPages = searchTerm => ({
	type: SEARCH_PAGES,
	searchTerm
});

export const SIGN_UP ='SIGN_UP';
export const signUp = () => ({
	type: SIGN_UP
});

export const LOGIN = 'LOGIN'
export const login = () => ({
	type: LOGIN
});

export const RETURN_TO_HOME = 'RETURN_TO_HOME';
export const returnToHome = () => ({
	type: RETURN_TO_HOME
});

export const EDIT_PAGE = 'EDIT_PAGE';
export const editPage = () => ({
	type: EDIT_PAGE
})