import React from 'react';
import {View} from 'react-native';
import {ImageIndex} from '../../assets/images/imageIndex';
import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
import {
  ColumnView,
  ContainerView,
  ImageContainer,
  RowView,
} from '../../component/style/generalComponentStyle';
import {COLORS, PADDING, SIZES, viewportWidth} from '../../constants/Theme';
import {Formik} from 'formik';
import * as yup from 'yup';
import CommonTextInput from '../../component/input/CommonTextInput';
import CommonButton from '../../component/button/commonButton/CommonButton';
import {Container} from './PasswordChangeScreenStyles';
const PasswordChangeScreen = ({navigation, route}) => {
  const registerSchema = yup.object({
    oldPassword: yup.string().required('Mật khẩu cũ không được để trống'),
    newPassword: yup
      .string()
      .required('Mật khẩu mới không được để trống')
      .notOneOf(
        [yup.ref('oldPassword'), null],
        'Không được trùng với mật khẩu cũ',
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], 'Phải trùng với mật khẩu mới')
      .required('Xác nhận mật khẩu mới không được để trống'),
  });
  const imageHeight = viewportWidth * 0.2;
  return (
    <ContainerView>
      <AppStatusBar />
      <ColumnView flex={1}>
        <View
          style={{
            position: 'absolute',
            bottom: 5,
            left: 24,
            zIndex: 3,
          }}>
          <ImageContainer
            width={80}
            height={80}
            source={route.params.avatar ? {uri: route.params.avatar} : ImageIndex.default_avatar}
          />
        </View>
        
        <RowView
          flex={2}
          justifyContent={'flex-end'}
          alignItems={'flex-end'}
          backgroundColor={`${COLORS.APP_COLOR_BLUR}`}
          paddingHorizontal={10}>
          <ImageContainer
            height={imageHeight}
            width={imageHeight * 1.16}
            source={ImageIndex.password_change}
            marginRight={20}
          />
        </RowView>
        <RowView flex={1} />
      </ColumnView>
      <ColumnView flex={2.5} paddingHorizontal={PADDING.LARGE} paddingTop={30}>
        <Container>
          <Formik
            initialValues={{
              oldPassword: '',
              newPassword: '',
              confirmPassword: '',
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              actions.resetForm();
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              setFieldValue,
              touched,
              errors,
            }) => (
              <>
                <CommonTextInput
                  label={'Nhập mật khẩu cũ'}
                  fontSize={15}
                  isRequired
                  value={values.oldPassword}
                  onChangeText={handleChange('oldPassword')}
                  onBlur={handleBlur('oldPassword')}
                  isError={touched.oldPassword && errors.oldPassword}
                  errorMsg={errors.oldPassword}
                  secureTextEntry
                />
                <CommonTextInput
                  label={'Nhập mật khẩu mới'}
                  fontSize={15}
                  isRequired
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                  isError={touched.newPassword && errors.newPassword}
                  errorMsg={errors.newPassword}
                  secureTextEntry
                />
                <CommonTextInput
                  label={'Xác nhận mật khẩu mới'}
                  fontSize={15}
                  isRequired
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  isError={touched.confirmPassword && errors.confirmPassword}
                  errorMsg={errors.confirmPassword}
                  secureTextEntry
                />
                <RowView justifyContent={'flex-end'}>
                  <CommonButton
                    width={viewportWidth * 0.3}
                    marginVertical={10}
                    title={'Lưu'}
                    onPress={handleSubmit}
                    paddingVertical={PADDING.MEDIUM}
                    fontSize={SIZES.MEDIUM}
                    paddingHorizontal={PADDING.MEDIUM}
                  />
                </RowView>
              </>
            )}
          </Formik>
        </Container>
      </ColumnView>
    </ContainerView>
  );
};
export default PasswordChangeScreen;
