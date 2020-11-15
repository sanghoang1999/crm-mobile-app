import React from 'react';
import {
  InputView,
  Input,
  Label,
  Container,
  ErrorIcon,
  ErrorText,
  LabelContainer,
  StyledImageIcon,
  InputMask,
} from './CommonTextInputStyles';
import {COLORS} from '../../constants/Theme';
import { ImageIndex } from '../../assets/images/imageIndex';
const CommonTextInput = ({
  placeholder,
  label,
  isRequired,
  fontSize,
  onChangeText,
  value,
  onBlur,
  keyboardType,
  secureTextEntry,
  marginTop,
  editable,
  onTextInputPress,
  isError,
  errorMsg,
  isLabelIcon,
  labelIconPressHandler,
  useFormatted,
  autoCapitalize,
}) => {
  return (
    <Container marginTop={marginTop}>
      {label && (
        <LabelContainer>
          <Label fontSize={fontSize}>{label}</Label>
          {isRequired && (
            <Label
              color={`${COLORS.RED}`}
              fontSize={fontSize}
              marginHorizontal={5}>
              *
            </Label>
          )}
        </LabelContainer>
      )}
      <InputView isError={isError}>
        <Input
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          autoCorrect={false}
          editable={editable}
          onTouchStart={() => (onTextInputPress ? onTextInputPress() : null)}
          autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
        />
        {isError && <ErrorIcon source={ImageIndex.ic_error} />}
      </InputView>
      {isError && errorMsg && <ErrorText>{errorMsg}</ErrorText>}
    </Container>
  );
};

export default CommonTextInput;
