import React from 'react';
import {
	View,
	Text,
	WebView
} from 'react-native';

import Header from '../components/header.js';

const ChangeSource = ({closeModal, selectedArticle}) => {
	return (
		<View style={{flex: 1}}>
			<Header title={selectedArticle.title} onItemClicked={closeModal} iconType="cross"/>
			<WebView source={{uri: selectedArticle.url}}/>
		</View>
	);
};

export default ChangeSource;
