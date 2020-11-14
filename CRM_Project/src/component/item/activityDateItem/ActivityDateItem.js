import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SCREEN_NAME} from '../../../constants/Key';
import {COLORS, PADDING} from '../../../constants/Theme';
import {
  AppText,
  ColumnView,
  ImageContainer,
  RowView,
} from '../../style/generalComponentStyle';

const ActivityDateItem = ({navigation,name, image, activityType, startTime, endTime}) => {
  const isMeeting = activityType === 'MEETING';
  const goToActivityDetail = () => {
    if (isMeeting) navigation.navigate(SCREEN_NAME.ACTIVITY_MEETING);
    else navigation.navigate(SCREEN_NAME.ACTIVITY_CONTACT);
  };
  return (
    <TouchableOpacity
      style={{
        backgroundColor: `${COLORS.APP_COLOR_BLUR}`,
        marginVertical: PADDING.MEDIUM,
        marginHorizontal: PADDING.SMALL,
        paddingVertical: PADDING.MEDIUM,
        paddingHorizontal: PADDING.LARGE,
        borderTopWidth: PADDING.MEDIUM,
        borderTopColor: COLORS.APP_COLOR,
        borderBottomRightRadius: 10,
        elevation: 4,
      }}
      activeOpacity={0.8}
      onPress={goToActivityDetail}
      >
      <RowView alignItems={'center'}>
        <ImageContainer width={65} height={65} source={image} />
        <ColumnView flex={3}>
          <AppText fontWeight={'bold'} marginHorizontal={10} fontSize={18}>
            {name}
          </AppText>
          <AppText marginHorizontal={10} fontSize={14}>
            {isMeeting ? 'Buổi hẹn' : 'Liên lạc'}
          </AppText>
        </ColumnView>
        <ColumnView flex={3} alignItems={'center'}>
          <AppText marginHorizontal={10} fontSize={12} fontStyle={'italic'}>
            {startTime} - {endTime}
          </AppText>
        </ColumnView>
      </RowView>
    </TouchableOpacity>
  );
};
export default ActivityDateItem;
