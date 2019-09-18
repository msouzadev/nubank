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
export default function Menu({translateY, navigation, menu = []}) {
  console.log(navigation);
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
        {menu.map(item => (
          <NavItem onPress={item.onPress} key={item.label}>
            <Icon name={item.icon} size={20} color="#FFF" />
            <NavText style={{flex: 9}}>{item.label}</NavText>
            <Icon name="keyboard-arrow-right" size={18} color="#FFF" />
          </NavItem>
        ))}
      </Nav>

      <SignoutButton onPress={() => {}}>
        <SignoutButtonText>SAIR DO APP</SignoutButtonText>
      </SignoutButton>
    </Container>
  );
}
