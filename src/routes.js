import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Button, Text, View, Easing, Animated} from 'react-native';
import Main from '~/pages/Main';
import IndicateFriend from '~/pages/IndicateFriend';
import Help from '~/pages/Help';
import Pay from '~/pages/Pay';
import ToCharge from '~/pages/ToCharge';
import Transfer from '~/pages/Transfer';
import Deposit from '~/pages/Deposit';
import BlockCard from '~/pages/BlockCard';

export const AppNavigator = createStackNavigator(
  {
    Main,
    IndicateFriend,
    Help,
    Pay,
    ToCharge,
    Deposit,
    Transfer,
    BlockCard,
  },
  {
    transparentCard: true,
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Help',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: sceneProps => {
        const {layout, position, scene} = sceneProps;
        const thisSceneIndex = scene.index;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
          outputRange: [1, 1, 0.5],
        });

        return {opacity, transform: [{translateY}]};
      },
    }),
  },
);
const Routes = createAppContainer(createSwitchNavigator({AppNavigator}));

export default Routes;
