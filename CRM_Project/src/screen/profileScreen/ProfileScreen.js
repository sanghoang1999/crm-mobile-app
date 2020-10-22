import React from 'react';
import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
import {
  AppText,
  ColumnView,
  IconContainer,
  ImageContainer,
  RowView,
} from '../../component/style/generalComponentStyle';
import {COLORS, viewportWidth} from '../../constants/Theme';
import {ContainerView, OptionItem, ViewOptionItem} from './ProfileScreenStyle';
import {ImageIndex} from '../../assets/images/imageIndex';
import {SCREEN_NAME} from '../../constants/Key';

const ProfileScreen = ({navigation, route}) => {
  const imageHeight = viewportWidth * 0.22;
  const logOut = () => {
    navigation.reset({
      index: 0,
      routes: [{name: SCREEN_NAME.LOGIN_SCREEN}],
    });
  };
  const changePassword = () => {
    navigation.navigate(SCREEN_NAME.PASSWORD_CHANGE);
  };
  return (
    <ContainerView>
      <AppStatusBar />
      <ColumnView flex={2}>
        <RowView
          flex={2}
          justifyContent={'flex-end'}
          alignItems={'flex-end'}
          backgroundColor={`${COLORS.APP_COLOR_BLUR}`}
          paddingHorizontal={10}>
          <ImageContainer
            height={imageHeight}
            width={imageHeight * 1.2}
            source={ImageIndex.account}
          />
        </RowView>
        <RowView flex={1} />
      </ColumnView>
      <ColumnView flex={6}>
        <ViewOptionItem>
          <OptionItem activeOpacity={0.5} onPress={changePassword}>
            <AppText textColor={`${COLORS.BLACK}`} fontSize={15}>
              Thay đổi mật khẩu
            </AppText>
            <IconContainer
              height={20}
              width={20}
              marginRight={5}
              source={ImageIndex.ic_change_password}
            />
          </OptionItem>
        </ViewOptionItem>
        <ViewOptionItem borderBottom>
          <OptionItem activeOpacity={0.5} onPress={logOut}>
            <AppText textColor={`${COLORS.RED}`} fontSize={15}>
              Đăng xuất
            </AppText>
            <IconContainer
              height={20}
              width={20}
              source={ImageIndex.ic_log_out}
            />
          </OptionItem>
        </ViewOptionItem>
      </ColumnView>
    </ContainerView>
  );
};
export default ProfileScreen;
