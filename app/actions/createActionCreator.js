import {getArticles, getSources} from '../dataprovider.js';

const createActionCreator = (store, apikey) => {
	const requestArticles = (source) => {
		getArticles(source, apikey)
			.then(articles => {
				store.dispatch({
					type: 'RECEIVE_ARTICLES',
					articles: articles
				});
			});
	};

	const requestSources = () => {
		getSources(apikey)
			.then(sources => {
				store.dispatch({
					type: 'RECEIVE_SOURCES',
					sources: sources
				});
			});
	};

	const changeSource = (source) => {
		return getArticles(source, apikey)
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
