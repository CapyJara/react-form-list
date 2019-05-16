import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a Color', () => {
    const wrapper = shallow(<Color name={'pink'} hex={'bl234'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
