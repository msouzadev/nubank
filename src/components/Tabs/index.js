import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Container, TabsContainer, TabItem, TabText} from './styles';
import IndicateFriend from '~/pages/IndicateFriend';
import ToCharge from '~/pages/ToCharge';
import Deposit from '~/pages/Deposit';
import BlockCard from '~/pages/BlockCard';
import Transfer from '~/pages/Transfer';
// import Help from '~/pages/Help';
import Pay from '~/pages/Pay';
export default function Tabs({translateY, tabs = []}) {
  return (
    <>
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
        }}>
        <TabsContainer>
          {tabs.map(tab => (
            <TabItem
              onPress={() => {
                tab.onPress();
              }}
              key={tab.name}>
              {tab.name == 'pay' ? (
                <FontAwesome name={tab.icon} size={24} color="#FFF" />
              ) : (
                <Icon name={tab.icon} size={24} color="#FFF" />
              )}

              <TabText>{tab.label}</TabText>
            </TabItem>
          ))}
        </TabsContainer>
      </Container>
    </>
  );
}
