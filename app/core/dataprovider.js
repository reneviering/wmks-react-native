import apiKey from '../../env/apikey.js';

export const getArticles = (source) => {
	return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`)
		 .then((response) => response.json())
		 .then((response) => {
			 return response.articles;
		 });
};

export const getSources = () => {
	return fetch(`https://newsapi.org/v1/sources?apiKey=${apiKey}`)
		 .then((response) => response.json())
		 .then((response) => {
			 return response.sources;
		 });
};
