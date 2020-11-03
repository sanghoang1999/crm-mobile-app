import styled from 'styled-components/native';
import {Platform} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import {COLORS, PADDING} from '../../constants/Theme';

const LABEL_SIZE = 14;
const CONTAINER_MT = 8;

export const Container = styled.View`
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop : CONTAINER_MT}px;
`;

export const InputView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${(props) =>
    props.isError ? COLORS.RED : COLORS.INPUT_BORDER};
  padding-horizontal: ${PADDING.MEDIUM}px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : COLORS.WHITE};
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: COLORS.PLACEHOLDER_APP_COLOR,
}))`
  padding-vertical: 5px;
  flex: 1;
`;
export const LabelContainer = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
`;

export const Label = styled.Text`
  color: ${(props) => (props.color ? props.color : COLORS.BLACK)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : LABEL_SIZE)}px;
  ${(props) =>
    props.marginHorizontal
      ? `margin-horizontal:${props.marginHorizontal}px;`
      : ''}
`;

export const ErrorIcon = styled.Image.attrs((props) => ({
  resizeMode: 'contain',
}))`
  width: 20px;
  height: 20px;
`;

export const ErrorText = styled.Text`
  color: ${COLORS.RED};
  font-size: 11px;
`;
