import {getArticles, getSources} from '../dataprovider.js';

const createActionCreator = (store) => {
	const requestArticles = (source) => {
		getArticles(source)
			.then(articles => {
				store.dispatch({
					type: 'RECEIVE_ARTICLES',
					articles: articles
				});
			});
	};

	const requestSources = () => {
		getSources()
			.then(sources => {
				store.dispatch({
					type: 'RECEIVE_SOURCES',
					sources: sources
				});
			});
	};

	const changeSource = (source) => {
		return getArticles(source)
			.then(articles => {
				store.dispatch({
					type: 'CHANGE_SOURCE',
					articles: articles,
					source: source
				});
			});
	};

	return {requestArticles, requestSources, changeSource};
}

export default createActionCreator;
