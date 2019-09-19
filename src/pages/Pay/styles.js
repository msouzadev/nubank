import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const CloseModalView = styled.View``;
export const CloseModalContainer = styled.TouchableWithoutFeedback``;

export const CloseButtonText = styled.Text`
  font-size: 30px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const OptionContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  /* padding: 12% 7%; */
  min-height: ${hp('20%')};
  padding: 0 15px;
  border-bottom-width: 1;
  border-bottom-color: #cccccc;
`;

export const OptionText = styled.Text`
  color: #404040;
  font-size: 18;
`;
export const OptionDescription = styled.View`
  flex: 8;
  background: #fff;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;
`;

export const OptionTitle = styled.Text`
  color: #222;
  font-weight: bold;
  font-size: 18;
`;

export const OptionsContainer = styled.View`
  background: #ffffff;
  flex: 8;
`;
