import React from 'react';
import { shallow } from 'enzyme';
import CreateColor from './CreateColor';

describe('CreateColor component', () => {
  it('renders a CreateColor', () => {
    const wrapper = shallow(<CreateColor addColor={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
