import React from 'react';
import PropType from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropType.element.isRequired,
};

export default DefaultLayout;
