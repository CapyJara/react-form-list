import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function Photos({ photos }) {
  return photos.map(photo => (
    <li key={photo.photo}>
      <Photo photo={photo.photo} />
    </li>
  )); 
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;


