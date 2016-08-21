import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray'
	},
	text: {
		color: 'black'
	}
});

const ArticleListItem = ({article}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{article.title}</Text>
		</View>
	);
};

export default ArticleListItem;
