import React from 'react-native';
import mockery from "mockery";

mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
mockery.registerMock('../../assets/img/change.png', 0);
mockery.registerMock('../../assets/img/cross.png', 0);
import { shallow } from 'enzyme';
import ChangeSourceListView from '../changeSourceListView.js';
import { expect } from 'chai';

describe('<ChangeSourceListView />', () => {
  it('should render it', () => {
		const sources={
			sources: [{name: 'sourceName'}]
		};
		const changeSource = () => {};
    const wrapper = shallow(<ChangeSourceListView sources={sources} changeSource={changeSource}/>);
    expect(wrapper.length).to.equal(1);
  });
});
