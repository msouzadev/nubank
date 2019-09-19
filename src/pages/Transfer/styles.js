import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

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
