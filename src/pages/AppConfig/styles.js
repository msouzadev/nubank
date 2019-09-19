import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const CloseModalView = styled.View``;
export const CloseModalContainer = styled.TouchableWithoutFeedback``;

export const TopContent = styled.View`
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 0.7;
`;
export const ModalTitle = styled.Text`
  font-weight: bold;
  font-size: 14;
  text-align: center;
  flex: 9;
  color: #222;
`;
export const OptionsContainer = styled.FlatList`
  background: #ffffff;
  padding: 0 10px;
  flex: 9;
`;
export const OptionContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 15px 15px;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: #cccccc;
  justify-content: center;
  align-items: center;
`;

export const TopicTitle = styled.Text`
  color: #222222;
  font-size: 16;
  text-align: center;
  /* font-weight: bold; */
`;
export const TopicDescription = styled.Text`
  color: #767676;
  font-size: 14;
  /* padding-top: 6px; */
`;
export const Topic = styled.View`
  flex: 1;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  /* align-items: flex-end */
  /* padding: 0 20px; */
`;

export const SearchContainer = styled.TouchableOpacity`
  border-color: #cdcdcd;
  border-radius: 5px;
  border-width: 1px;
  margin: 5px 20px;
  flex-direction: row;
`;
