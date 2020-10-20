import React from 'react';
import {StatusBar} from 'react-native';
import {ImageIndex} from '../../assets/images/imageIndex';
import {ColumnView, ImageContainer} from '../../component/style/generalComponentStyle';
import CommonButton from '../../component/button/commonButton/CommonButton';
import {SCREEN_NAME} from '../../constants/Key';
import {PADDING, SIZES, viewportWidth} from '../../constants/Theme';
import {CircleView, ContainerView} from './LoginScreenStyle';
const LoginScreen = ({navigation, route}) => {
  const logIn = () => {
    navigation.navigate(SCREEN_NAME.TAB_NAVIGATION);
  };
  return (
    <ContainerView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <CircleView
        width={200}
        height={200}
        borderRadius={100}
        opacity={0.29}
        top={-91}
        left={-21}
      />
      <CircleView
        width={200}
        height={200}
        borderRadius={100}
        opacity={0.29}
        top={-52}
        left={-100}
      />
      <ColumnView flex={1} justifyContent={'center'}>
        <ImageContainer
          width={viewportWidth}
          height={viewportWidth * 0.5}
          source={ImageIndex.access_account}
        />
        <CommonButton
          title={'Đăng nhập'}
          onPress={logIn}
          paddingVertical={PADDING.MEDIUM}
          fontSize={SIZES.MEDIUM}
          marginHorizontal={viewportWidth * 0.25}
          paddingHorizontal={PADDING.MEDIUM}
        />
      </ColumnView>
      <CircleView
        width={132}
        height={132}
        borderRadius={100}
        opacity={0.1}
        right={-76}
        bottom={0}
      />
      <CircleView
        width={132}
        height={132}
        borderRadius={100}
        opacity={0.1}
        right={0}
        bottom={-76}
      />
    </ContainerView>
  );
};
export default LoginScreen;
