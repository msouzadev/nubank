import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
export const Container = styled.Modal`
  background-color: #fff;
`;

export const Skeleton = styled(SkeletonPlaceholder)``;
export const CloseModalView = styled.View``;
export const CloseModalContainer = styled.TouchableWithoutFeedback``;

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

export const Strong = styled.Text`
  font-weight: bold;
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
  font-size: 20;
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
