import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const CancelText = styled.Text`
  font-size: 15px;
  color: #941bc3;
  font-weight: bold;
`;

export const CancelButton = styled.TouchableOpacity`
  flex: 0.6;
  align-items: flex-end;
`;

export const TopContent = styled.View`
  padding: 0 20px;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const OptionsContainer = styled.FlatList`
  background: #ffffff;
  padding: 0 15px;
  flex: 8;
`;
export const OptionContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 15px 15px;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: #cccccc;
`;

export const TopicTitle = styled.Text`
  color: #222222;
  font-size: 16;
  /* font-weight: bold; */
`;
export const TopicDescription = styled.Text`
  color: #767676;
  font-size: 14;
  padding-top: 6px;
  flex: 1;
`;
export const Topic = styled.View`
  flex: 9;
  background: #fff;
  flex-direction: column;
  justify-content: flex-start;
  /* padding: 0 20px; */
`;

export const SearchContainer = styled.TouchableOpacity`
  border-color: #cdcdcd;
  border-radius: 5px;
  border-width: 1px;
  margin: 5px 20px;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#959595',
})`
  font-size: 16px;
  flex: 1;
  height: 100%;
  width: 100%;
`;
