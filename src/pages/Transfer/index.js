import React, { useState } from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Brands from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  CloseModalContainer,
  CloseModalView,
  CloseButton,
  TopContent,
  TopText,
  Strong,
  OptionsContainer,
  OptionContainer,
  OptionText,
  Footer,
  InvitedText,
  ButtonBox,
  ButtonBoxText,
  EmailBadge,
  EmailBadgeText,
} from './styles';

export default function IndicateFriend({ onClose }) {
  const [open, setOpen] = useState(true);
  return (
    <Container
      animationType="slide"
      transparent={open}
      visible={open}
      onRequestClose={() => { onClose && onClose(); setOpen(false); }}
    >
      <CloseModalContainer onPress={() => { onClose && onClose(); setOpen(false) }}>
        <CloseModalView style={{ flex: 1, backgroundColor: '#222', opacity: 0.3 }} />
      </CloseModalContainer>
      <View style={{ flex: 9, backgroundColor: '#FFF' }}>
        <TopContent>
          <CloseButton onPress={() => { onClose && onClose(); setOpen(false); }}>
            <Icon name="close" size={28} />
          </CloseButton>

          <TopText>
            Por <Strong>onde </Strong> você quer <Strong>indicar</Strong> seu amigo?
          </TopText>
        </TopContent>

        <OptionsContainer>
          <OptionContainer>
            <Icon name="mail-outline" size={28} color="#7d7d7d" />
            <OptionText>E-MAIL</OptionText>
            <EmailBadge><EmailBadgeText>10</EmailBadgeText></EmailBadge>
          </OptionContainer>
          <OptionContainer>
            <Brands name="facebook-messenger" size={28} color="#7d7d7d" />
            <OptionText>FACEBOOK MESSENGER</OptionText>
          </OptionContainer>
          <OptionContainer>
            <Brands name="whatsapp" size={28} color="#7d7d7d" />
            <OptionText>WHATSAPP</OptionText>
          </OptionContainer>
          <OptionContainer>
            <Icon name="more-horiz" size={28} color="#7d7d7d" />
            <OptionText>MAIS OPÇOES</OptionText>
          </OptionContainer>
        </OptionsContainer>
        <Footer>
          <InvitedText>6 indicaçoes enviadas</InvitedText>
          <ButtonBox>
            <ButtonBoxText>
              VER
            </ButtonBoxText>
          </ButtonBox>
        </Footer>
      </View>
    </Container>

  );
}
