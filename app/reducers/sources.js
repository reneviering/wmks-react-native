const initialState = {
	sources: [],
	selectedSource: 'hacker-news'
};

const sources = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_SOURCES':
			return Object.assign({}, state, {
				sources: action.sources
			});
		case 'CHANGE_SOURCE':
				return Object.assign({}, state, {
					selectedSource: action.source
				});
		default:
			return state;
	}
};

export default sources;
