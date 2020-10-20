import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {BOTTOM_NAV, SCREEN_NAME} from '../../constants/Key';
import ActivityScreen from '../../screen/activityScreen/ActivityScreen';
import {COLORS} from '../../constants/Theme';
import {Platform} from 'react-native';
import {IconContainer, ImageContainer} from '../style/generalComponentStyle';
import {ImageIndex} from '../../assets/images/imageIndex';

const BottomTabNavigator = createBottomTabNavigator();

const ActivityStk = createStackNavigator();
const CustomerStk = createStackNavigator();
const NoteStk = createStackNavigator();
const ProfileStk = createStackNavigator();

const ActivityStack = () => {
  return (
    <ActivityStk.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.APP_COLOR,
        },
        headerTintColor: COLORS.WHITE,
        headerTitleAlign: 'center',
      }}>
      <ActivityStk.Screen
        name={SCREEN_NAME.ACTIVITY_SCREEN}
        component={ActivityScreen}
        options={{
          title: 'Hoạt động',
          headerLeft: () => null,
        }}
      />
    </ActivityStk.Navigator>
  );
};
const TabNavigation = () => {
  const activityIconChange = ({focused, size}) =>
    focused ? (
      <IconContainer
        source={ImageIndex.ic_contact_focused}
        width={size * 1.5}
        height={size}
      />
    ) : (
      <IconContainer
        source={ImageIndex.ic_contact}
        width={size * 1.5}
        height={size}
      />
    );
  return (
    <BottomTabNavigator.Navigator
      initialRouteName={'Activity'}
      tabBarOptions={{
        activeTintColor: COLORS.APP_COLOR,
        style: {
          height: BOTTOM_NAV.HEIGHT,
          backgroundColor: COLORS.WHITE,
          borderTopLeftRadius: BOTTOM_NAV.RADIUS,
          borderTopRightRadius: BOTTOM_NAV.RADIUS,
          paddingTop: BOTTOM_NAV.PADDING_TOP,
          paddingBottom: BOTTOM_NAV.PADDING_BOTTOM,
          ...Platform.select({
            android: {
              elevation: 7,
            },
            ios: {
              shadowOffset: {width: 2, height: 0},
              shadowColor: COLORS.BLACK,
              shadowOpacity: 0.2,
            },
          }),
        },
      }}>
      <BottomTabNavigator.Screen
        name={'Activity'}
        component={ActivityStack}
        options={{
          title: 'Hoạt động',
          tabBarIcon: activityIconChange,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default TabNavigation;
