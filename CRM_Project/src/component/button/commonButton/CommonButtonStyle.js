import styled from 'styled-components/native';
import {COLORS, PADDING} from '../../../constants/Theme';

export const ButtonView = styled.View`
  border-radius: 50px;
  background-color: ${(props) =>
    props.buttonColor ? props.buttonColor : COLORS.APP_COLOR};
  ${(props) =>
    props.borderColor ? `border-color: ${props.borderColor};` : ''};
  ${(props) =>
    props.borderWidth ? `border-width: ${props.borderWidth}px;` : ''};
  ${(props) =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ''};
  ${(props) =>
    props.paddingVertical
      ? `padding-vertical: ${props.paddingVertical}px;`
      : ''}
  ${(props) =>
    props.paddingHorizontal
      ? `padding-horizontal: ${props.paddingHorizontal}px;`
      : ''}
  ${(props) =>
    props.marginHorizontal
      ? `margin-horizontal: ${props.marginHorizontal}px;`
      : ''};
`;

export const ButtonText = styled.Text`
  color: ${(props) => (props.textColor ? props.textColor : COLORS.WHITE)};
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}px;` : ``)};
  text-align: center;
  ${(props) =>
    props.textDecoration ? `text-decoration: ${props.textDecoration};` : ''};
`;
