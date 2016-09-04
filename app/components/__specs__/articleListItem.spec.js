import React from 'react-native';
import mockery from "mockery";

mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
mockery.registerMock('../../assets/img/change.png', 0);
mockery.registerMock('../../assets/img/cross.png', 0);
import { shallow } from 'enzyme';
import ArticleListItem from '../articleListItem.js';
import { expect } from 'chai';

describe('<ArticleListItem />', () => {
  it('should render it', () => {
		const article={urlToImage: 'path/to/image'}
    const wrapper = shallow(<ArticleListItem article={article} />);
    expect(wrapper.length).to.equal(1);
  });
});
