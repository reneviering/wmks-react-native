import React from 'react-native';
import mockery from "mockery";

mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
mockery.registerMock('../../assets/img/change.png', 0);
mockery.registerMock('../../assets/img/cross.png', 0);
import { shallow } from 'enzyme';
import { expect } from 'chai';
import MainComponent from '../index.js';

describe('<MainComponent />', () => {
  it('should render it', () => {
		const wrapper = shallow(<MainComponent/>);
		expect(wrapper.length).to.equal(1);
  });
});
