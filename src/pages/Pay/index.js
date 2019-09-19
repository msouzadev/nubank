import React, {useState, useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  OptionsContainer,
  OptionContainer,
  OptionText,
  OptionDescription,
  OptionTitle,
  CloseModalContainer,
  CloseModalView,
  CloseButton,
} from './styles';
import {View} from 'react-native';

export default function Pay({navigation}) {
  return (
    <>
      <CloseModalContainer
        onPress={() => {
          navigation.goBack();
        }}>
        <CloseModalView
          style={{flex: 1, backgroundColor: '#222', opacity: 0.3}}
        />
      </CloseModalContainer>
      <View style={{flex: 9, backgroundColor: '#FFF'}}>
        <CloseButton
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="close" size={50} color="#767676" />
        </CloseButton>

        <OptionsContainer>
          <OptionContainer>
            <Icon name="credit-card" size={28} color="#8d3dc8" />
            <OptionDescription>
              <OptionTitle>Pagar fatura do cartão</OptionTitle>
              <OptionText>Usando o saldo da NuConta</OptionText>
            </OptionDescription>
            <Icon
              name="keyboard-arrow-right"
              style={{color: '#7e7e7e'}}
              size={28}
            />
          </OptionContainer>
          <OptionContainer>
            <FontAwesome name="barcode" size={28} color="#8d3dc8" />
            <OptionDescription>
              <OptionTitle>Pagar um boleto</OptionTitle>
              <OptionText>Contas de luz, água, etc</OptionText>
            </OptionDescription>
            <Icon
              name="keyboard-arrow-right"
              style={{color: '#7e7e7e'}}
              size={28}
            />
          </OptionContainer>
        </OptionsContainer>
      </View>
    </>
  );
}
