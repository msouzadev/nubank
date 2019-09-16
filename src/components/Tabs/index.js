import React, { useState, useEffect } from 'react';
import {
  Modal, Alert, View, Text, TouchableHighlight, TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';
import IndicateFriend from '~/pages/IndicateFriend';
import ToCharge from '~/pages/ToCharge';
import Deposit from '~/pages/Deposit';

export default function Tabs({ translateY, tabs = [] }) {
  const [modalOpen, setOpen] = useState(false);
  const [tabsNav, setTabs] = useState(tabs);
  const [tabOpened, setTabOpen] = useState('deposit');

  function renderTabContent(tabOpened) {
    switch (tabOpened) {
      case 'indicate-friend':
        return <IndicateFriend onClose={() => setTabOpen('')} />;
      case 'to-charge':
        return <ToCharge onClose={() => setTabOpen('')} />;
      case 'deposit':
        return <Deposit onClose={() => setTabOpen('')} />;
      default:
        return null;
    }
  }
  console.log(tabsNav);
  return (
    <>
      {tabOpened ? renderTabContent(tabOpened) : null}
      <Container
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [0, 30],
                extrapolate: 'clamp',
              }),
            },
          ],
          opacity: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [1, 0.3],
            extrapolate: 'clamp',
          }),
        }}
      >
        <TabsContainer>
          {tabs.map((tab) => (
            <TabItem onPress={() => { setTabOpen(tab.name); }} key={tab.name}>
              <Icon name={tab.icon} size={24} color="#FFF" />
              <TabText>{tab.label}</TabText>
            </TabItem>
          ))}

          <TabItem>
            <Icon name="chat-bubble-outline" size={24} color="#FFF" />
            <TabText>Cobrar</TabText>
          </TabItem>
          <TabItem>
            <Icon name="arrow-downward" size={24} color="#FFF" />
            <TabText>Depositar</TabText>
          </TabItem>
          <TabItem>
            <Icon name="arrow-upward" size={24} color="#FFF" />
            <TabText>Transferir</TabText>
          </TabItem>
          <TabItem>
            <Icon name="lock" size={24} color="#FFF" />
            <TabText>Bloquear cartão</TabText>
          </TabItem>
        </TabsContainer>
      </Container>
    </>
  );
}
