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

type Source = {
	id: string,
	name: string,
	description: string,
	url: string,
	urlsToLogos: {
		small: string,
		medium: string,
		large: string
	}
};

type ArticleListState = {
	title: string,
	changeSourceVisible: bool,
	articleDetailsVisible: bool,
	articles: Array<Article>,
	sources: {
		sources: Array<Source>,
		selectedSource: string
	},
	selectedArticle: ?Article
};


const initialState:ArticleListState = {
	title: 'Hacker News!',
	changeSourceVisible: false,
	articleDetailsVisible: false,
	articles: [],
	sources: {
		sources: [],
		selectedSource: 'hacker-news'
	},
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
				articles: currentState.articles,
				sources: currentState.sources,
			}))
		});

		this.props.actionCreator.requestSources();
		this.props.actionCreator.requestArticles(this.state.sources.selectedSource);
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

	getTitle() {
		if (this.state.sources.sources.length === 0) {
			return '';
		}
		return this.state.sources.sources.find(source => source.id === this.state.sources.selectedSource).name;
	},

	render() {
		return (
			<View style={{flex: 1}}>
				<Header title={this.getTitle()} onItemClicked={this.openChangeSource} iconType="change"/>

				<ArticleListView articles={this.state.articles} onSelectArticle={this.openArticleDetails} style={{flex: 1}}/>

				<Modal animationType={'slide'} visible={this.state.changeSourceVisible} transparent={false}>
					<ChangeSource closeModal={this.closeChangeSource} sources={this.state.sources} actionCreator={this.props.actionCreator}/>
				</Modal>

				<Modal animationType={'slide'} visible={this.state.articleDetailsVisible} transparent={false}>
					<ArticleDetails closeModal={this.closeArticleDetails} selectedArticle={this.state.selectedArticle}/>
				</Modal>
			</View>
		);
	}
})

export default ArticleList;
