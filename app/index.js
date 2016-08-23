import React from 'react';
import {
	View,
	Text
} from 'react-native';
import {createStore, combineReducers} from 'redux';

import ArticleList from './containers/articleList.js';
import articlesReducer from './reducers/articles.js';
import sourcesReducer from './reducers/sources.js';
import createActionCreator from './actions/createActionCreator.js';

const rootReducer = combineReducers({articles: articlesReducer, sources: sourcesReducer});
const store = createStore(rootReducer);
const actionCreator = createActionCreator(store);


const MainComponent = React.createClass({
	render() {
		return (
			<ArticleList store={store} actionCreator={actionCreator}/>
		);
	}
})

export default MainComponent;
