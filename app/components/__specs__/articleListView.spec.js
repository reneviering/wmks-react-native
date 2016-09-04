import React from 'react-native';
import mockery from "mockery";

mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
mockery.registerMock('../../assets/img/change.png', 0);
mockery.registerMock('../../assets/img/cross.png', 0);
import { shallow } from 'enzyme';
import ArticleListView from '../articleListView.js';
import { expect } from 'chai';

describe('<ArticleListView />', () => {
  it('should render it', () => {
		const articles= [{name: 'articleName'}]
		const onSelectArticle = () => {};
    const wrapper = shallow(<ArticleListView articles={articles} onSelectArticle={onSelectArticle}/>);
    expect(wrapper.length).to.equal(1);
  });
});
