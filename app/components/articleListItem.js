import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray',
		flexDirection: 'row'
	},
	image: {
		flex:1,
		marginRight: 10
	},
	text: {
		flex:3,
		color: 'black'
	}
});

const ArticleListItem = ({article}) => {
	const image = article.urlToImage ? <Image source={{uri: article.urlToImage}} style={styles.image} /> : null;
	return (
		<View style={styles.container}>
			{image}
			<Text style={styles.text}>{article.title}</Text>
		</View>
	);
};

export default ArticleListItem;
