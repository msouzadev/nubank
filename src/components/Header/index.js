import React from 'react';

import {Container, Top, Logo, Title} from './styles';
import logo from '~/assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Matheus</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#b177c2" />
    </Container>
  );
}
