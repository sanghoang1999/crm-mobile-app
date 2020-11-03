import React, {useState} from 'react';
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
import ImagePicker from 'react-native-image-picker';
import {
  PERMISSIONS,
  RESULTS,
  requestMultiple,
  openSettings,
} from 'react-native-permissions';
import {TouchableOpacity, Image, View} from 'react-native';
import ImageResizer from 'react-native-image-resizer';

const ProfileScreen = ({navigation, route}) => {
  const imageHeight = viewportWidth * 0.22;
  const [avatar, setAvatar] = useState(null);
  const logOut = () => {
    navigation.reset({
      index: 0,
      routes: [{name: SCREEN_NAME.LOGIN_SCREEN}],
    });
  };
  const changePassword = () => {
    navigation.navigate(SCREEN_NAME.PASSWORD_CHANGE, {avatar: avatar});
  };
  const options = {
    noData: true,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    quality: 0.5,
    maxWidth: 1920,
    maxHeight: 1080,
  };
  const changeAvatarHandler = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        if (!response.fileName) response.fileName = path.split('/').pop();
        setAvatar(response.uri)
        // setAvatarImageSrc(response.uri);
        // setAvatarImage(response);
      }
    });
  };
  // useEffect(() => {
  //   if (avatar) {
  //     ImageResizer.createResizedImage(avatar.uri, 1920, 1080, 'JPEG', 50)
  //       .then((response) => {
  //         (async () => {
  //           const params = {
  //             name: response.name.toLowerCase(),
  //             type: 'image/jpeg',
  //           };
  //           // setLoading(true);
  //           // const s3Response = await api.user
  //           //   .postUserImage(source.token, params, accessToken)
  //           //   .catch((error) => console.log('shariot', error.message));

  //           // const photoKeyImg = s3Response.data.key;
  //           RNFetchBlob.fetch(
  //             'PUT',
  //             s3Response.data.url,
  //             { 'Content-Type': 'image/jpeg' },
  //             RNFetchBlob.wrap(response.path)
  //           )
  //             .then((res) => {
  //               // eslint-disable-next-line eqeqeq
  //               if (res.respInfo.status == RESPONSE_CODE.SUCCESS) {
  //                 const photoKeys = {
  //                   profilePhotoKey: photoKeyImg,
  //                 };
  //                 sendPhotoKeys(photoKeys);
  //                 setTimeout(() => {
  //                   setLoading(false);
  //                 }, 500);
  //               }
  //             })
  //             .catch((err) => {
  //               console.log(err);
  //               setTimeout(() => {
  //                 setLoading(false);
  //               }, 10);
  //               setTimeout(() => {
  //                 alert(t('upload_avatar_fail'));
  //               }, 500);
  //             });
  //         })();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [avatarImage]);
  const requestPermission = () => {
    requestMultiple(
      Platform.select({
        android: [
          PERMISSIONS.ANDROID.CAMERA,
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        ],
      }),
    )
      .then((responses) => {
        if (Object.values(responses).every((res) => res === RESULTS.GRANTED)) {
          console.log('Success');
          changeAvatarHandler();
        } else {
          // createTwoButtonAlert(
          //   t('title.permission'),
          //   t('message.camera_per_message'),
          //   openSettings,
          // );
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <ContainerView>
      <AppStatusBar />
      <ColumnView flex={1}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 5,
            left: 24,
            zIndex: 3,
          }}
          onPress={requestPermission}
          >
          <ImageContainer
            width={80}
            height={80}
            source={avatar ? {uri: avatar} : ImageIndex.default_avatar}
          />
          <View  style={{
            position: 'absolute',
            bottom:0,
            right: 5,
            zIndex: 3,
          }}>
        <ImageContainer
            width={20}
            height={20}
            source={ImageIndex.image_addition}
          />
        </View>
        </TouchableOpacity>
        
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
      <ColumnView flex={2.5} paddingTop={30}>
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
