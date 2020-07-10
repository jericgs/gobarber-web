import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/">DASHBOARD</Link>
        </nav>

        <anside>
          <Profile>
            <div>
              <strong>Erico Gomes</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Erico Gomes"
            />
          </Profile>
        </anside>
      </Content>
    </Container>
  );
}

export default Header;
