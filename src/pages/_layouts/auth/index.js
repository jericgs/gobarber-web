import React from 'react';
import PropType from 'prop-types';

import { Wrapper } from './styles';

function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: PropType.element.isRequired,
};

export default AuthLayout;
