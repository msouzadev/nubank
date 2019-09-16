import React, {useState} from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Brands from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  SearchContainer,
  SearchInput,
} from './styles';

export default function IndicateFriend({onClose}) {
  const [open, setOpen] = useState(true);
  return (
    <Container
      animationType="slide"
      transparent={open}
      visible={open}
      onRequestClose={() => {
        onClose && onClose();
        setOpen(false);
      }}>
      <CloseModalContainer
        onPress={() => {
          onClose && onClose();
          setOpen(false);
        }}>
        <CloseModalView
          style={{flex: 1, backgroundColor: '#222', opacity: 0.3}}
        />
      </CloseModalContainer>
      <View style={{flex: 9, backgroundColor: '#FFF'}}>
        <TopContent>
          <CloseButton
            onPress={() => {
              onClose && onClose();
              setOpen(false);
            }}>
            <Icon name="close" size={35} color="#767676" />
          </CloseButton>

          <TopText>TRANSFERIR</TopText>
          <Brands name="cubes" size={35} color="#767676" />
        </TopContent>

        <OptionsContainer>
          <SearchContainer>
            <SearchInput placeholder="Buscar Contato" style={{flex: 9}} />
            <Icon
              name="search"
              size={30}
              style={{justifyContent: 'center', alignSelf: 'center'}}
              color="#767676"
            />
          </SearchContainer>
          <OptionContainer>
            <AntDesign name="adduser" size={28} color="#8d3dc8" />
            <OptionText>Transferir para novo contato</OptionText>

            <Icon name="keyboard-arrow-right" size={18} />
          </OptionContainer>
          <OptionContainer>
            <OptionText>Matheus Santos de Souza (Você)</OptionText>
            <Icon name="keyboard-arrow-right" size={18} />
          </OptionContainer>
          <OptionContainer>
            <OptionText>Eliezer Marques da Silva Neto</OptionText>

            <Icon name="keyboard-arrow-right" size={18} />
          </OptionContainer>
          <OptionContainer>
            <OptionText>Lucas Pereira Santos</OptionText>

            <Icon name="keyboard-arrow-right" size={18} />
          </OptionContainer>
        </OptionsContainer>
      </View>
    </Container>
  );
}
