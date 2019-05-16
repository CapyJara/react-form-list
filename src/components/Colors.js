import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  return colors.map(({ name, hex, rgb }) => (
    <li key={`${name}-${hex}-${rgb}`}>
      <Color name={name} hex={hex} rgb={rgb}/>
    </li>
  ));
}

Colors.prototype = {
  colors: PropTypes.array.isRequired
};

export default Colors;
