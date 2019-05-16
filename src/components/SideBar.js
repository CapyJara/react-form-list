import React from 'react';
import PropTypes from 'prop-types';

function SideBar({ children }) {
  return (
    <nav>
      {children}
    </nav>
  );
}

SideBar.propTypes = {
  children: PropTypes.node
};

export default SideBar;
