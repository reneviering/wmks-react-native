import React from 'react';
import {
	View,
	Text,
	ScrollView
} from 'react-native';

import Header from '../components/header.js';
import ChangeSourceListView from '../components/changeSourceListView.js';

const ChangeSource = ({closeModal, sources, actionCreator}) => {
	const changeSource = (newSourceId) => {
		actionCreator.changeSource(newSourceId)
			.then(closeModal);
	};

	return (
		<View style={{flex: 1}}>
			<Header title="Change Source" onItemClicked={closeModal}/>
			<ChangeSourceListView sources={sources} changeSource={changeSource}/>
		</View>
	);
};

export default ChangeSource;
