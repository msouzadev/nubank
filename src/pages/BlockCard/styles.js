import styled from 'styled-components/native';

export const CloseModalView = styled.View``;
export const CloseModalContainer = styled.TouchableWithoutFeedback``;

export const CloseButtonText = styled.Text`
  font-size: 30px;
`;

export const BlockQuestion = styled.Text`
  padding: 20px 50px;
  font-size: 16px;
  text-align: center;
`;

export const Strong = styled.Text`
  font-weight: bold;

  font-size: 16px;
`;

export const Footer = styled.View`
  background: #fff;
  flex-direction: row;
  border-top-width: 1;

  border-top-color: #cccccc;
`;

export const ConfirmText = styled.Text`
  color: ${props => (props.block ? '#222' : '#8d3dc8')};
  font-size: 14px;
  font-weight: bold;
`;
