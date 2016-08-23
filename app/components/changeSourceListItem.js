import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableHighlight
} from 'react-native';

const createStyleSheet = (source, selectedSource) => {
	const backgroundColor = source.id === selectedSource ? '#98ADC2' : 'transparent';
	return	StyleSheet.create({
		container: {
			backgroundColor: backgroundColor,
			padding: 10
		}
	});
}


const ChangeSourceListItem = ({source, selectedSource, changeSource}) => {
	const styles = createStyleSheet(source, selectedSource);
	return (
		<TouchableHighlight underlayColor="transparent" onPress={() => {changeSource(source.id)}}>
			<View style={styles.container}>
				<Image source={{uri: source.urlsToLogos.small}} style={{height: 40}} resizeMode="contain"/>
			</View>
		</TouchableHighlight>
	);
}

export default ChangeSourceListItem;
