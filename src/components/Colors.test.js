import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  it('renders a Colors', () => {
    const wrapper = shallow(
      <Colors colors={[{ name: 'pink', hex: 'bl234' }, { name: 'pink', hex: 'bl234' }]}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
