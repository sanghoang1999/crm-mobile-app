import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {BOTTOM_NAV, SCREEN_NAME} from '../../constants/Key';
import ActivityScreen from '../../screen/activityScreen/ActivityScreen';
import {COLORS} from '../../constants/Theme';
import {Platform} from 'react-native';
import {IconContainer, ImageContainer} from '../style/generalComponentStyle';
import {ImageIndex} from '../../assets/images/imageIndex';
import ProfileScreen from '../../screen/profileScreen/ProfileScreen';
import CustomerScreen from '../../screen/customerScreen/CustomerScreen';
import NoteScreen from '../../screen/noteScreen/NoteScreen';

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
const CustomerStack = () => {
  return (
    <CustomerStk.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.APP_COLOR,
        },
        headerTintColor: COLORS.WHITE,
        headerTitleAlign: 'center',
      }}>
      <ActivityStk.Screen
        name={SCREEN_NAME.CUSTOMER_SCREEN}
        component={CustomerScreen}
        options={{
          title: 'Khách hàng',
          headerLeft: () => null,
        }}
      />
    </CustomerStk.Navigator>
  );
};
const NoteStack = () => {
  return (
    <NoteStk.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.APP_COLOR,
        },
        headerTintColor: COLORS.WHITE,
        headerTitleAlign: 'center',
      }}>
      <NoteStk.Screen
        name={SCREEN_NAME.NOTE_SCREEN}
        component={NoteScreen}
        options={{
          title: 'Ghi chú',
          headerLeft: () => null,
        }}
      />
    </NoteStk.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <ProfileStk.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.APP_COLOR,
        },
        headerTintColor: COLORS.WHITE,
        headerTitleAlign: 'center',
      }}>
      <ProfileStk.Screen
        name={SCREEN_NAME.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          title: 'Tài khoản',
          headerLeft: () => null,
        }}
      />
    </ProfileStk.Navigator>
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
  const customerIconChange = ({focused, size}) =>
    focused ? (
      <IconContainer
        source={ImageIndex.ic_customer_focused}
        width={size * 1.5}
        height={size}
      />
    ) : (
      <IconContainer
        source={ImageIndex.ic_customer}
        width={size * 1.5}
        height={size}
      />
    );
  const noteIconChange = ({focused, size}) =>
    focused ? (
      <IconContainer
        source={ImageIndex.ic_note_focused}
        width={size * 1.5}
        height={size}
      />
    ) : (
      <IconContainer
        source={ImageIndex.ic_note}
        width={size * 1.5}
        height={size}
      />
    );
  const profileIconChange = ({focused, size}) =>
    focused ? (
      <IconContainer
        source={ImageIndex.ic_account_focused}
        width={size * 1.5}
        height={size}
      />
    ) : (
      <IconContainer
        source={ImageIndex.ic_account}
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
          shadowColor: COLORS.BLACK,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,
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
      <BottomTabNavigator.Screen
        name={'Customer'}
        component={CustomerStack}
        options={{
          title: 'Khách hàng',
          tabBarIcon: customerIconChange,
        }}
      />
      <BottomTabNavigator.Screen
        name={'Note'}
        component={NoteStack}
        options={{
          title: 'Ghi chú',
          tabBarIcon: noteIconChange,
        }}
      />
      <BottomTabNavigator.Screen
        name={'Profile'}
        component={ProfileStack}
        options={{
          title: 'Tài khoản',
          tabBarIcon: profileIconChange,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default TabNavigation;
