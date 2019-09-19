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
  UnspecifiedValueText,
  UnspecifiedValue,
} from './styles';

export default function IndicateFriend({onClose, navigation}) {
  const [open, setOpen] = useState(true);
  const [toCharge, setCharge] = useState(0);
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

  // useEffect(() => {
  //   if (keyboarIsVisible == true) {
  //     Keyboard.removeAllListeners('keyboardDidShow');
  //   } else {
  //     Keyboard.removeAllListeners('keyboardDidHide');
  //   }
  // }, [keyboarIsVisible]);
  return (
    <>
      <CloseModalContainer onPress={() => navigation.goBack()}>
        <CloseModalView
          style={{flex: 1, backgroundColor: '#222', opacity: 0.3}}
        />
      </CloseModalContainer>
      <View style={{flex: 9, backgroundColor: '#FFF'}}>
        <TopContent>
          <CloseButton
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="close" size={28} />
          </CloseButton>

          <TopText>
            <Strong>Quanto </Strong> você quer cobrar?
          </TopText>
        </TopContent>
        <InputContainer style={{flex: 9}}>
          <TextInputMask
            maxLength={10}
            style={{
              // paddingLeft: 35,
              height: 100,
              // backgroundColor: 'red',
              fontSize: 35,
              fontWeight: '400',
              marginTop: 0,
            }}
            type="money"
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$ ',
              suffixUnit: '',
            }}
            value={toCharge}
            onChangeText={text => {
              setCharge(text);
            }}
          />
          <UnspecifiedValue onPress={() => {}}>
            <UnspecifiedValueText>
              Não especificar um valor >{' '}
            </UnspecifiedValueText>
          </UnspecifiedValue>
        </InputContainer>
        <Footer style={{flex: keyboarIsVisible ? 2 : 1}}>
          <ConfirmText>CONFIRMAR</ConfirmText>
        </Footer>
        {/* <KeyboardSpacer /> */}
      </View>
    </>
  );
}
