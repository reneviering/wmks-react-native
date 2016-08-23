import React from 'react';
import {
	View,
	Text,
	ScrollView
} from 'react-native';

import ChangeSourceListItem from './changeSourceListItem.js';

const ChangeSourceListView = ({sources, changeSource}) => {
	const sourceComponents = sources.sources.map((source, index) => {
		return (
			<ChangeSourceListItem key={index} source={source} selectedSource={sources.selectedSource} changeSource={changeSource}/>
		);
	})
	return (
		<ScrollView>
			{sourceComponents}
		</ScrollView>
	);
};

export default ChangeSourceListView;
