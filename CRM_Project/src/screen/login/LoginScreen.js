import React from 'react';
import {StatusBar} from 'react-native';
import {ImageIndex} from '../../assets/images/imageIndex';
import {
  ColumnView,
  ImageContainer,
  RowView,
  IconContainer,
} from '../../component/style/generalComponentStyle';
import CommonButton from '../../component/button/commonButton/CommonButton';
import {SCREEN_NAME} from '../../constants/Key';
import {
  PADDING,
  SIZES,
  viewportHeight,
  viewportWidth,
} from '../../constants/Theme';
import {
  CircleView,
  ContainerView,
  InputView,
  InputText,
  VerticalLine,
  StyledKeyboardAvoidView,
} from './LoginScreenStyle';
import {Formik} from 'formik';

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
      <StyledKeyboardAvoidView>
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
        <ColumnView flex={1} justifyContent={'center'} alignItems={'center'}>
          <ImageContainer
            width={viewportWidth}
            height={viewportHeight * 0.25}
            source={ImageIndex.access_account}
            marginVertical={30}
          />
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values) => {
              console.log(values);
              logIn();
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              setFieldValue,
            }) => (
              <>
                <InputView>
                  <IconContainer
                    source={ImageIndex.ic_user}
                    width={15}
                    height={15}
                  />
                  <VerticalLine />
                  <InputText
                    onChangeText={(value) => {
                      setFieldValue('email', value.trim());
                    }}
                    value={values.email.trim()}
                    onBlur={handleBlur('email')}
                    placeholder={'Tên đăng nhập'}
                  />
                </InputView>
                <InputView>
                  <IconContainer
                    source={ImageIndex.ic_password}
                    width={15}
                    height={15}
                  />
                  <VerticalLine />
                  <InputText
                    onChangeText={handleChange('password')}
                    value={values.password}
                    onBlur={handleBlur('password')}
                    placeholder={'Mật khẩu'}
                    secureTextEntry
                  />
                </InputView>
                <CommonButton
                  width={viewportWidth * 0.6}
                  marginVertical={10}
                  title={'Đăng nhập'}
                  onPress={handleSubmit}
                  paddingVertical={PADDING.MEDIUM}
                  fontSize={SIZES.MEDIUM}
                  paddingHorizontal={PADDING.MEDIUM}
                />
              </>
            )}
          </Formik>
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
      </StyledKeyboardAvoidView>
    </ContainerView>
  );
};
export default LoginScreen;
