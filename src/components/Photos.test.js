import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('Photos component', () => {
  it('renders a Photos', () => {
    const photos = [
      { photo: 'http://carrepairnearme.info/wp-content/uploads/2019/03/japanese-joinery-bed-woodworking-building-a-bed-for-my-boy-furniture-store-new-design-joinery-japanese-wood-joinery-bed.jpg' },
      { photo: 'https://i.pinimg.com/originals/29/cd/f5/29cdf57a4f9526cdd04eedf435712819.jpg' }
    ];

    const wrapper = shallow(<Photos photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
