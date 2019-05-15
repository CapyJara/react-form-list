import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Photo component', () => {
  it('renders a Photo', () => {
    const photo = 'https://i.pinimg.com/originals/29/cd/f5/29cdf57a4f9526cdd04eedf435712819.jpg';

    const wrapper = shallow(<Photo photo={photo} />);
    expect(wrapper).toMatchSnapshot();
  });
});
