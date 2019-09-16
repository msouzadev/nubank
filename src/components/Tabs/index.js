import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';
import IndicateFriend from '~/pages/IndicateFriend';
import ToCharge from '~/pages/ToCharge';
import Deposit from '~/pages/Deposit';
import BlockCard from '~/pages/BlockCard';

export default function Tabs({ translateY, tabs = [] }) {
  const [tabsNav, setTabs] = useState(tabs);
  const [tabOpened, setTabOpen] = useState('block-card');

  function renderTabContent(tabOpened) {
    switch (tabOpened) {
      case 'indicate-friend':
        return <IndicateFriend onClose={() => setTabOpen('')} />;
      case 'to-charge':
        return <ToCharge onClose={() => setTabOpen('')} />;
      case 'deposit':
        return <Deposit onClose={() => setTabOpen('')} />;
      case 'block-card':
        return <BlockCard onClose={() => setTabOpen('')} />;
      default:
        return null;
    }
  }
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


        </TabsContainer>
      </Container>
    </>
  );
}
