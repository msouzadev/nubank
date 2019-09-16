import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 9;
  background-color: #82269e;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.View`
  flex: 9;
  max-height: 400px;
  justify-content: center;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 2;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  max-height: 300px;

`;
export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding:  10px 30px;
`;

export const CardContent = styled.View`
  flex: 9;
  padding: 0 30px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 16px;
  color: #999;
`;
export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;
export const Annottation = styled.Text`
  font-size: 12px;
  color: #333;
`;
