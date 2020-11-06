import React from 'react';
import {ScrollView, View} from 'react-native';
import {ImageIndex} from '../../assets/images/imageIndex';
import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
import CommonButton from '../../component/button/commonButton/CommonButton';
import {
  AppText,
  ColumnView,
  ContainerView,
  ImageContainer,
  RowView,
} from '../../component/style/generalComponentStyle';
import {COLORS, PADDING, viewportWidth} from '../../constants/Theme';
import {BorderView} from './ActivityTypeScreenStyles';

const ActivityContactScreen = ({navigation, route}) => {
  const imageHeight = viewportWidth * 0.22;
  return (
    <ContainerView>
      <AppStatusBar />
      <ColumnView flex={3}>
        <RowView
          flex={2}
          backgroundColor={COLORS.APP_COLOR_BLUR}
          alignItems={'flex-end'}
          paddingHorizontal={PADDING.LARGE}>
          <ImageContainer
            height={imageHeight}
            width={imageHeight * 1.9}
            source={ImageIndex.activity_contact}
          />
        </RowView>
        <RowView flex={1} />
        <AppText
          position={'absolute'}
          right={110}
          bottom={10}
          fontSize={18}
          fontWeight={'bold'}>
          Name
        </AppText>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            right: 24,
            zIndex: 3,
          }}>
          <ImageContainer
            width={80}
            height={80}
            source={ImageIndex.default_avatar}
          />
        </View>
      </ColumnView>
      <ColumnView flex={5} paddingVertical={5}>
        <BorderView>
          <AppText fontWeight={'bold'}>Thông tin chi tiết</AppText>
          <AppText>Kênh liên lạc: </AppText>
          <AppText>Thời gian bắt đầu: </AppText>
          <AppText>Thời gian kết thúc: </AppText>
        </BorderView>
        <BorderView flex={4} marginTop={PADDING.SMALL}>
          <AppText fontWeight={'bold'}>Nội dung</AppText>
          <ScrollView></ScrollView>
        </BorderView>
      </ColumnView>
      <RowView
        flex={1}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingHorizontal={PADDING.LARGE}>
        <CommonButton
          title={'XÓA'}
          onPress={() => console.log('xóa')}
          buttonColor={COLORS.RED}
          textColor={COLORS.WHITE}
          width={125}
          paddingVertical={8}
        />
        <CommonButton
          title={'THAY ĐỔI'}
          onPress={() => console.log('thay đổi')}
          buttonColor={COLORS.APP_COLOR}
          textColor={COLORS.WHITE}
          width={125}
          paddingVertical={8}
        />
      </RowView>
    </ContainerView>
  );
};

export default ActivityContactScreen;
