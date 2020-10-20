import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN_NAME} from '../../constants/Key';
import LoginScreen from '../../screen/login/LoginScreen';
import TabNavigation from '../tabNavigation/TabNavigation';
const AppStk = createStackNavigator();
const AppStack = () => {
  return (
    <AppStk.Navigator screenOptions={{headerShown: false}}>
      <AppStk.Screen name={SCREEN_NAME.LOGIN_SCREEN} component={LoginScreen} />
      <AppStk.Screen
        name={SCREEN_NAME.TAB_NAVIGATION}
        component={TabNavigation}
      />
    </AppStk.Navigator>
  );
};
export default AppStack;
