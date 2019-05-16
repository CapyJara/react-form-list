import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './SideBar';

describe('SideBar component', () => {
  it('renders a SideBar', () => {
    const wrapper = shallow(
      <SideBar>
        <a href={'o hey there'}>Testing</a>
      </SideBar> 
    );
    expect(wrapper).toMatchSnapshot();
  });
});
