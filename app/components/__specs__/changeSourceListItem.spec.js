import React from 'react-native';
import mockery from "mockery";

mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
mockery.registerMock('../../assets/img/change.png', 0);
mockery.registerMock('../../assets/img/cross.png', 0);
import { shallow } from 'enzyme';
import ChangeSourceListItem from '../changeSourceListItem.js';
import { expect } from 'chai';

describe('<ChangeSourceListItem />', () => {
  it('should render it', () => {
		const source={name: 'sourceName', urlsToLogos: {small: 'small/url'}};
		const selectedSource = 'bbc';
		const changeSource = () => {};
    const wrapper = shallow(<ChangeSourceListItem source={source} changeSource={changeSource} selectedSource={selectedSource}/>);
    expect(wrapper.length).to.equal(1);
  });
});
