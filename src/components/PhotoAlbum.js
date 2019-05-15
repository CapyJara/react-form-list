import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum(photos) {
  return (
    <ul>
      <Photos photos={photos} />
    </ul>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
