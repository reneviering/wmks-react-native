import React from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableHighlight
} from 'react-native';

import ArticleListItem from './articleListItem.js';

const ArticleListView = ({articles, onSelectArticle}) => {
	const articleListItems = articles.map((article, index) => {
		return (
			<TouchableHighlight key={index} onPress={() => {onSelectArticle(article);}} underlayColor="transparent">
				<View>
					<ArticleListItem article={article}/>
				</View>
			</TouchableHighlight>
		);
	});
	return (
		<ScrollView>
			{articleListItems}
		</ScrollView>

	);
};

export default ArticleListView;
