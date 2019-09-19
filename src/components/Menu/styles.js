import styled from 'styled-components/native';
import {StyleSheet, Animated} from 'react-native';

export const Container = styled(Animated.ScrollView).attrs({})`
  margin: 0 30px;
  flex: 1;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #a15cb6;
  /* width: '90%'; */
  flex: 1;
`;

export const NavItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #a15cb6;
`;

export const NavText = styled.Text`
  font-size: 13px;
  color: #fff;
  margin-left: 20px;
`;

export const SignoutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const SignoutButtonText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #fff;
`;
