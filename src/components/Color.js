import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, rgb }) {
  
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>Rgb</dt>
      <dd>
        <p>Red: {rgb.red}</p>
        <p>Green: {rgb.green}</p>
        <p>Blue: {rgb.blue}</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired
  })
};

export default Color;
