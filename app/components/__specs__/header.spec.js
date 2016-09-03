import React from 'react-native';
import mockery from "mockery";

mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});
mockery.registerMock('../../assets/img/change.png', 0);
mockery.registerMock('../../assets/img/cross.png', 0);
import { shallow } from 'enzyme';
import Header from '../header.js';
import { expect } from 'chai';

describe('<Header />', () => {
  it('should render it', () => {
    const wrapper = shallow(<Header title="Test" />);
    expect(wrapper.length).to.equal(1);
  });
});
