const articles = (state= [], action) => {
	switch(action.type) {
		case 'RECEIVE_ARTICLES':
			return [...action.articles];
		case 'CHANGE_SOURCE':
			return [...action.articles];
		default:
			return state;
	}
};

export default articles;
