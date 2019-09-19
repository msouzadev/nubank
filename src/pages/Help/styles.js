import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const CloseButtonText = styled.Text`
  font-size: 30px;
`;

export const CloseButton = styled.TouchableOpacity`
  flex: 1;
`;

export const TopContent = styled.View`
  padding: 15px 20px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const TopText = styled.Text`
  padding: 10px 10px;
  font-size: 16px;
  font-weight: bold;
  color: #767676;
  flex: 9;
  align-self: center;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const OptionsContainer = styled.FlatList`
  background: #ffffff;
  padding: 0 15px;
  flex: 7;
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
  font-size: 18;
  font-weight: bold;
`;
export const TopicDescription = styled.Text`
  color: #767676;
  font-size: 16;
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

export const Footer = styled.View`
  flex: 1;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-top-width: 1;
  border-top-color: #e4e4e4;
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
  flex: 9;
`;

export const FooterText = styled.Text`
  color: #8d3dc8;
  font-size: 16px;
  font-weight: bold;
`;

export const FooterButton = styled.TouchableOpacity`
  flex: 1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RatingContainer = styled.View`
  flex: 3;
  padding: 0 20px;
  margin-top: 40;
  height: 100%;
`;
RateTitle;

export const RatintTitle = styled.Text`
  font-weight: bold;
  font-size: 18;
  padding: 0 15px;
`;
export const RateOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 15px;
`;

export const RateOption = styled.View`
  height: 60;
  width: 60px;
  border-radius: 80;
  border-color: #cccccc;
  border-width: 1;
  justify-content: center;
  align-items: center;
`;

export const RateTitle = styled.Text`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10;
  color: #8a05be;
  font-size: 14;
`;
