import React from 'react';
import {
	View,
	Text
} from 'react-native';

import ArticleList from './containers/articleList.js';

const MainComponent = React.createClass({
	render() {
		return (
			<ArticleList/>
		);
	}
})

export default MainComponent;
