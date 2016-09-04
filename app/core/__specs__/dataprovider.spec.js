var fetchMock = require('fetch-mock');
let apiKey = 'fake-api-key';

const getArticlesResult = {
	articles: [
		{
		author: "Max Mustermann",
		},
	]
}

const getSourcesResult = {
	sources: [
		{
		name: "BBC",
		},
	]
}

fetchMock.get(`https://newsapi.org/v1/articles?source=bbc&apiKey=${apiKey}`, getArticlesResult);
fetchMock.get(`https://newsapi.org/v1/sources?apiKey=${apiKey}`, getSourcesResult);
import {getArticles, getSources} from '../dataprovider.js';

describe('dataprovider', () => {
	describe('getArticles()', () => {
		it('returns articles for given source', () => {
			getArticles('bbc').then(response => {
				expect(response).to.equal(getArticlesResult);
			});
		});
	});

	describe('getSources()', () => {
		it('returns available sources', () => {
			getSources().then(response => {
				expect(response).to.equal(getSourcesResult);
			});
		});
	});
});
