import {getArticles} from '../dataprovider.js';

const createActionCreator = (store) => {
	const requestArticles = (source) => {
		getArticles(source)
			.then(articles => {
				store.dispatch({
					type: 'RECEIVE_ARTICLES',
					articles: articles
				})
			});
	};

	return {requestArticles};
}

export default createActionCreator;
