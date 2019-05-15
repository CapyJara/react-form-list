import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from './PhotoAlbum';

describe('PhotoAlbum component', () => {
  it('renders a PhotoAlbum', () => {
    const photos = [
      {}
    ]

    const wrapper = shallow(<PhotoAlbum photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
