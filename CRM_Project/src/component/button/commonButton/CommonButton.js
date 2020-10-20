import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonView, ButtonText} from './CommonButtonStyle';

const CommonButton = ({
  title,
  onPress,
  buttonColor,
  textColor,
  paddingHorizontal,
  borderWidth,
  borderColor,
  marginBottom,
  fontSize,
  paddingVertical,
  marginHorizontal,
  textDecoration,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <ButtonView
        {...{
          buttonColor,
          paddingHorizontal,
          borderWidth,
          borderColor,
          marginBottom,
          paddingVertical,
          marginHorizontal,
        }}>
        <ButtonText
          {...{textColor, fontSize, textDecoration}}>
          {title}
        </ButtonText>
      </ButtonView>
    </TouchableOpacity>
  );
};

export default CommonButton;
