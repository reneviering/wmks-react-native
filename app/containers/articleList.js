// @flow
import React from 'react';
import {
	View,
	Text,
	Modal,
	ScrollView
} from 'react-native';

import Header from '../components/header.js';
import ChangeSource from '../containers/changeSource.js';
import ArticleDetails from '../containers/articleDetails.js';
import ArticleListView from '../components/articleListView.js';

type Article = {
	author: string,
	description: string,
	title: string,
	url: string,
	urlToImage: string,
	publishedAt: string
};

type ArticleListState = {
	title: string,
	changeSourceVisible: bool,
	articleDetailsVisible: bool,
	articles: Array<Article>,
	selectedArticle: ?Article
};


const initialState:ArticleListState = {
	title: 'Hacker News!',
	changeSourceVisible: false,
	articleDetailsVisible: false,
	articles: [],
	selectedArticle: null
};

const ArticleList = React.createClass({
	getInitialState() {
		return initialState;
	},

	componentDidMount() {
		this.props.store.subscribe(() => {
			const currentState = this.props.store.getState();
			this.setState(Object.assign({}, this.state, {
				articles: currentState.articles
			}))
		});

		this.props.actionCreator.requestArticles('focus');
	},

	openChangeSource() {
		this.setState(Object.assign({}, this.state, {
			changeSourceVisible: true
		}));
	},

	closeChangeSource() {
		this.setState(Object.assign({}, this.state, {
			changeSourceVisible: false
		}));
	},

	openArticleDetails(selectedArticle:Article) {
		this.setState(Object.assign({}, this.state, {
			articleDetailsVisible: true,
			selectedArticle: selectedArticle
		}));
	},

	closeArticleDetails() {
		this.setState(Object.assign({}, this.state, {
			articleDetailsVisible: false
		}));
	},

	render() {
		return (
			<View style={{flex: 1}}>
				<Header title={this.state.title} onItemClicked={this.openChangeSource}/>

				<ArticleListView articles={this.state.articles} onSelectArticle={this.openArticleDetails} style={{flex: 1}}/>

				<Modal animationType={'slide'} visible={this.state.changeSourceVisible} transparent={false}>
					<ChangeSource closeModal={this.closeChangeSource}/>
				</Modal>

				<Modal animationType={'slide'} visible={this.state.articleDetailsVisible} transparent={false}>
					<ArticleDetails closeModal={this.closeArticleDetails} selectedArticle={this.state.selectedArticle}/>
				</Modal>
			</View>
		);
	}
})

export default ArticleList;
