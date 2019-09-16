import React, {useState} from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import OtherIcons from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  CloseModalContainer,
  CloseModalView,
  CloseButton,
  TopContent,
  OptionsContainer,
  OptionContainer,
  OptionText,
  OptionDescription,
  OptionTitle,
} from './styles';

export default function Deposit({onClose}) {
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
            <Icon name="close" size={35} />
          </CloseButton>
        </TopContent>

        <OptionsContainer>
          <OptionContainer>
            <OtherIcons name="barcode" size={28} color="#8d3dc8" />
            <OptionDescription>
              <OptionTitle>Depositar por boleto</OptionTitle>
              <OptionText>
                O reconhecimento pode levar até 3 dias úteis
              </OptionText>
            </OptionDescription>
            <Icon
              name="keyboard-arrow-right"
              style={{position: 'absolute', right: 15, color: '#7e7e7e'}}
              size={28}
            />
          </OptionContainer>
          <OptionContainer>
            <Icon name="arrow-downward" size={28} color="#8d3dc8" />
            <OptionDescription>
              <OptionTitle>Depositar por TED</OptionTitle>
              <OptionText>
                O meio mais rápido de colocar dinheiro na sua NuConta
              </OptionText>
            </OptionDescription>
            <Icon
              name="keyboard-arrow-right"
              style={{position: 'absolute', right: 15, color: '#7e7e7e'}}
              size={28}
            />
          </OptionContainer>
          <OptionContainer>
            <Ionicons name="ios-cash" size={28} color="#8d3dc8" />
            <OptionDescription>
              <OptionTitle>Trazer seu salário</OptionTitle>
              <OptionText>
                Receba todo mês e não perca nenhum dia de rendimento
              </OptionText>
            </OptionDescription>
            <Icon
              name="keyboard-arrow-right"
              style={{position: 'absolute', right: 15, color: '#7e7e7e'}}
              size={28}
            />
          </OptionContainer>
        </OptionsContainer>
      </View>
    </Container>
  );
}
