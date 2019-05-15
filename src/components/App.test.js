import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Color component', () => {
  it('renders a Color', () => {
    const wrapper = shallow(<App  />);
    expect(wrapper).toMatchSnapshot();
  });
});
