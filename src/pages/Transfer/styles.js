import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
export const Container = styled.Modal`
  background-color: #fff;
`;

export const CloseModalView = styled.View``;
export const CloseModalContainer = styled.TouchableWithoutFeedback``;

export const CloseButtonText = styled.Text`
  font-size: 30px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const TopContent = styled.View`
  padding: 15px 20px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TopText = styled.Text`
  padding: 10px 10px;
  font-size: 16px;
  font-weight: bold;
  color: #767676;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const OptionsContainer = styled.FlatList`
  background: #ffffff;
  flex: 8;
`;
export const OptionContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 15px 15px;
  border-bottom-width: ${StyleSheet.hairlineWidth}
  border-bottom-color: #cccccc;
`;

export const OptionText = styled.Text`
  margin-left: 10px;
  color: #222222;
  font-size: 18;
  flex: 9;
`;

export const EmailBadge = styled.View`
  background: #8d3dc8;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-content: center;
  justify-content: center;
  align-items: center;
  right: 15;
  position: absolute;
`;
export const EmailBadgeText = styled.Text`
  color: #fff;
`;
export const Footer = styled.View`
  flex: 2;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const InvitedText = styled.Text`
  font-size: 16px;
  color: #222;
  font-size: 19px;
`;

export const ButtonBox = styled.TouchableOpacity`
  border: 1px #8d3dc8;
  height: 35px;
  width: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 5;
`;
export const ButtonBoxText = styled.Text`
  color: #8d3dc8;
`;

export const SearchContainer = styled.View`
  border-color: #cdcdcd;
  border-radius: 5px;
  border-width: 1px;
  margin: 5px 15px;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#959595',
})`
  font-size: 16px;
  flex: 9;
`;
