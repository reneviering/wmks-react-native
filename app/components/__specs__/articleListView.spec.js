import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import React, {TouchableHighlight} from 'react-native';
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

	describe('touching on an article', () => {
		it('invokes the onSelectedArticle callback', () => {
			const articles= [{name: 'articleName'}, {name: 'articleName'}]
			const onSelectArticle = sinon.spy();
			const wrapper = shallow(<ArticleListView articles={articles} onSelectArticle={onSelectArticle}/>);
			wrapper.find(TouchableHighlight).first().simulate('press');
			expect(onSelectArticle).to.have.been.called;
		});
	});
});
