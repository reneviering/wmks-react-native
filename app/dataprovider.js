import NEWSAPI_KEY from '../env/apikeys.js';
export const getArticles = (source) => {
	return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${NEWSAPI_KEY}`)
		 .then((response) => response.json())
		 .then((response) => {
			 return response.articles;
		 });
};

export const getSources = () => {
	return fetch(`https://newsapi.org/v1/sources?apiKey=${NEWSAPI_KEY}`)
		 .then((response) => response.json())
		 .then((response) => {
			 return response;
		 });
};
