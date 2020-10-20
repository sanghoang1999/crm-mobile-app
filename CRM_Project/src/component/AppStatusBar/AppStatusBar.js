import React from 'react';
import {StatusBar} from 'react-native';
import { COLORS } from '../../constants/Theme';

const AppStatusBar = () => {
  return (
    <StatusBar
      backgroundColor={COLORS.APP_COLOR}
      barStyle="light-content"
    />
  );
};
export default AppStatusBar;
