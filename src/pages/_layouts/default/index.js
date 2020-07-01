import React from 'react';
import PropType from 'prop-types';

import { Wrapper } from './styles';

function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropType.element.isRequired,
};

export default DefaultLayout;
