import React, {useState, useEffect} from 'react';
import {View, Keyboard} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInputMask} from 'react-native-masked-text';

import {
  Container,
  CloseModalContainer,
  CloseModalView,
  CloseButton,
  TopContent,
  TopText,
  Strong,
  InputContainer,
  Footer,
  ConfirmText,
  BlockQuestion,
} from './styles';

export default function IndicateFriend({onClose, navigation}) {
  const [open, setOpen] = useState(true);
  const [keyboarIsVisible, setKeyboarIsVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboarIsVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboarIsVisible(false);
      },
    );
  }, []);

  useEffect(() => {
    if (keyboarIsVisible == true) {
      Keyboard.removeAllListeners('keyboardDidShow');
    } else {
      Keyboard.removeAllListeners('keyboardDidHide');
    }
  }, [keyboarIsVisible]);
  return (
    <>
      <CloseModalContainer
        onPress={() => {
          navigation.goBack();
        }}>
        <CloseModalView
          style={{flex: 6, backgroundColor: '#222', opacity: 0.3}}
        />
      </CloseModalContainer>
      <View
        style={{
          flex: 3,
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="lock-outline" size={50} color="#404040" />
        <BlockQuestion>
          Você quer <Strong>bloquear</Strong> <Strong>temporariamente</Strong> o
          seu cartão?
        </BlockQuestion>
      </View>
      <Footer flex={1}>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: '#cccccc',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ConfirmText block={true}>BLOQUEAR</ConfirmText>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ConfirmText>CONFIRMAR</ConfirmText>
        </View>
      </Footer>
    </>
  );
}
