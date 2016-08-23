import React from 'react';
import {
	View,
	Text,
	Image,
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
		textAlign: 'center',
		marginLeft: 10
	}
});

const getIcon = (iconType) => {
	if (iconType === 'change') {
		return <Image source={ require('../../assets/img/change.png')} style={{width:40, height:40}}/>;
	}

	return <Image source={ require('../../assets/img/cross.png')} style={{width:40, height:40}}/>;
}

const Header = ({title, onItemClicked, iconType}) => {
	const icon = getIcon(iconType);
	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={onItemClicked} underlayColor="transparent">
				<View style={styles.icon}>
					{icon}
	   		</View>
   		</TouchableHighlight>

			<Text numberOfLines={1} style={styles.title}>{title}</Text>
		</View>
	);
};

export default Header;
