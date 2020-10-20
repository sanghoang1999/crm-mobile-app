import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import {COLORS, viewportWidth} from '../../constants/Theme';

export const ContainerView = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
`;
export const StyledKeyboardAvoidView = styled(KeyboardAvoidingView).attrs((props) => ({}))`
  flex: 1;
`;
export const CircleView = styled.View`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
  background-color: ${COLORS.APP_COLOR};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  ${(props) => (props.top ? `top:${props.top}px;` : '')}
  ${(props) => (props.left ? `left:${props.left}px;` : '')}
  ${(props) => (props.right ? `right:${props.right}px;` : '')}
  ${(props) => (props.bottom ? `bottom:${props.bottom}px;` : '')}
`;
export const InputView = styled.View.attrs((props) => ({
  autoCapitalize: 'none',
}))`
  flex-direction: row;
  background-color: ${COLORS.WHITE};
  border-color: ${COLORS.APP_COLOR};
  border-width: 1px;
  border-radius: 10px;
  margin-vertical: 10px;
  width: ${viewportWidth * 0.8}px;
  align-items: center;
  padding-horizontal: 8px;
`;
export const VerticalLine = styled.View`
  width: 1px;
  background-color: ${COLORS.GREY};
  height: 30px;
  margin-horizontal: 5px;
`;
export const InputText = styled.TextInput.attrs((props) => ({
  placeholderTextColor: COLORS.PLACEHOLDER_APP_COLOR,
  autoCapitalize: 'none',
}))`
  flex: 1;
  color: ${COLORS.APP_COLOR};
`;
