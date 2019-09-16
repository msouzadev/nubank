import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated, View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  Annottation,
  CardFooter,
} from './styles';
import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Tabs from '~/components/Tabs';
import IndicateFriend from '~/pages/IndicateFriend';

export default function Main() {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const {width, height} = Dimensions.get('window');
  const handleChangeBalanceVisible = () => {
    setBalanceVisible(!balanceVisible);
  };
  const tabs = [
    {
      icon: 'person-add',
      name: 'indicate-friend',
      label: 'Indicar amigos',
      component: <IndicateFriend />,
    },
    {
      icon: 'chat-bubble-outline',
      name: 'to-charge',
      label: 'Cobrar',
      component: <IndicateFriend />,
    },
    {
      icon: 'arrow-downward',
      name: 'deposit',
      label: 'Depositar',
      component: <IndicateFriend />,
    },
    {
      icon: 'arrow-upward',
      name: 'transfer',
      label: 'Transferir',
      component: <IndicateFriend />,
    },
    {
      icon: 'lock',
      name: 'block-card',
      label: 'Bloquear cartão',
      component: <IndicateFriend />,
    },
    {
      icon: 'credit-card',
      name: 'virtual-card',
      label: 'Cartão virtual',
      component: <IndicateFriend />,
    },
  ];
  const translateY = new Animated.Value(0);
  let offset = 0;
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );
  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;
      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? height - 250 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? height - 250 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }
  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-250, 0, height - 250],
                    outputRange: [-50, 0, height - 250],
                    extrapolate: 'clamp',
                  }),
                },
              ],
              marginTop: 10,
              flex: 90,
            }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#767676" />
              <Text style={{fontSize: 20, color: '#767676'}}>NuConta</Text>
              <TouchableOpacity
                onPress={handleChangeBalanceVisible}
                style={{position: 'absolute', right: 15}}>
                <Icon
                  name={`visibility${balanceVisible ? '-off' : ''}`}
                  size={28}
                  color="#767676"
                />
              </TouchableOpacity>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <View
                style={{backgroundColor: balanceVisible ? '#FFF' : '#f7f7f7'}}>
                <Description
                  style={{color: balanceVisible ? '#333' : '#f7f7f7'}}>
                  R$ 7.500,95
                </Description>
              </View>
            </CardContent>
            <CardFooter>
              <Annottation>
                Transferencia de R$ 50 recebida do Lucas Pereira hoje ás 06:00h
              </Annottation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs tabs={tabs} translateY={translateY} />
    </Container>
  );
}
