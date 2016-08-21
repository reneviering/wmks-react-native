import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#34495E',
		height: (Platform.OS === 'ios') ? 80 : 60,
		paddingTop: (Platform.OS === 'ios') ? 20 : 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		width: 50,
		padding: 10
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		flex: 1,
		textAlign: 'center'
	}
});

const Header = ({title, onItemClicked}) => {
	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={onItemClicked} underlayColor="transparent">
				<View style={styles.icon}>
	   			<Text>Icon</Text>
	   		</View>
   		</TouchableHighlight>

			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Header;
