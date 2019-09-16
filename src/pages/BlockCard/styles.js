import styled from 'styled-components/native';

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
`;
export const BlockQuestion = styled.Text`
  padding: 20px 50px;
  font-size: 18px;
  text-align: center;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const InputContainer = styled.View`
  background: #f7f7f7;
  padding: 0 0 0 35px;
`;
export const UnspecifiedValueText = styled.Text`
  color: #404040;
  font-size: 20px;
`;
export const UnspecifiedValue = styled.TouchableOpacity``;
export const Footer = styled.View`
  background: #fff;
  flex-direction: row;
  border-top-width: 1;

  border-top-color: #cccccc;
`;

export const ConfirmText = styled.Text`
  color: ${props => (props.block ? '#222' : '#8d3dc8')};
  font-size: 16px;
  font-weight: bold;
`;
