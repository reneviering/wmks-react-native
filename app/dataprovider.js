export const getArticles = (source, apikey) => {
	return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${apikey}`)
		 .then((response) => response.json())
		 .then((response) => {
			 return response.articles;
		 });
};

export const getSources = (apikey) => {
	return fetch(`https://newsapi.org/v1/sources?apiKey=${apikey}`)
		 .then((response) => response.json())
		 .then((response) => {
			 return response.sources;
		 });
};
