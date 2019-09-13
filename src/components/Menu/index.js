import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignoutButtonText,
  SignoutButton,
} from './styles';
export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://instagram.com/fullstacksouza"
          size={80}
          color={'#FFF'}
          logoBackgroundColor={'#8b10ae'}
          backgroundColor={'#8b10ae'}
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="phone-iphone" size={20} color="#FFF" />
          <NavText>Configuração do app</NavText>
        </NavItem>
      </Nav>

      <SignoutButton onPress={() => {}}>
        <SignoutButtonText>SAIR DO APP</SignoutButtonText>
      </SignoutButton>
    </Container>
  );
}
