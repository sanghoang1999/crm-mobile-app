import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonView, ButtonText, ButtonTouchView} from './CommonButtonStyle';

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
  marginVertical,
  width,
}) => {
  return (
    <ButtonTouchView
      marginVertical={marginVertical}
      marginHorizontal={marginHorizontal}
      width={width}
      activeOpacity={0.8}
      onPress={onPress}>
      <ButtonView
        {...{
          buttonColor,
          paddingHorizontal,
          borderWidth,
          borderColor,
          marginBottom,
          paddingVertical,
        }}>
        <ButtonText {...{textColor, fontSize, textDecoration}}>
          {title}
        </ButtonText>
      </ButtonView>
    </ButtonTouchView>
  );
};

export default CommonButton;
