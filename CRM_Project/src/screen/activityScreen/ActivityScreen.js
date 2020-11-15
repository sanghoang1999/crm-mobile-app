import React from 'react';
import {FlatList, View} from 'react-native';

import {ImageIndex} from '../../assets/images/imageIndex';
import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
import ActivityDateItem from '../../component/item/activityDateItem/ActivityDateItem';
import {
  AppText,
  ColumnView,
  ContainerView,
} from '../../component/style/generalComponentStyle';
import {SCREEN_NAME} from '../../constants/Key';
import {COLORS, PADDING} from '../../constants/Theme';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
LocaleConfig.locales['vn'] = {
  monthNames: [
    'Tháng Một',
    'Tháng Hai',
    'Tháng Ba',
    'Tháng Tư',
    'Tháng Năm',
    'Tháng Sáu',
    'Tháng Bảy',
    'Tháng Tám',
    'Tháng Chín',
    'Tháng Mười',
    'Tháng Mười Một',
    'Tháng Mười Hai',
  ],
  dayNames: [
    'Chủ Nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy',
  ],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
};
LocaleConfig.defaultLocale = 'vn';
const ActivityScreen = ({navigation, route}) => {
  const goToActivityAddScreen = () => {
    navigation.navigate(SCREEN_NAME.ACTIVITY_ADD, {
      date: Date.now().toString(),
    });
  };
  const data = [
    {
      name: 'A',
      image: ImageIndex.default_avatar,
      activityType: 'MEETING',
      startTime: '7:00',
      endTime: '10:00',
      id: Math.random(),
    },
    {
      name: 'B',
      image: ImageIndex.default_avatar,
      activityType: 'CONTACT',
      startTime: '7:00',
      endTime: '10:00',
      id: Math.random(),
    },
    {
      name: 'B',
      image: ImageIndex.default_avatar,
      activityType: 'CONTACT',
      startTime: '7:00',
      endTime: '10:00',
      id: Math.random(),
    },
    {
      name: 'B',
      image: ImageIndex.default_avatar,
      activityType: 'CONTACT',
      startTime: '7:00',
      endTime: '10:00',
      id: Math.random(),
    },
    {
      name: 'B',
      image: ImageIndex.default_avatar,
      activityType: 'CONTACT',
      startTime: '7:00',
      endTime: '10:00',
      id: Math.random(),
    },
    {
      name: 'B',
      image: ImageIndex.default_avatar,
      activityType: 'CONTACT',
      startTime: '7:00',
      endTime: '10:00',
      id: Math.random(),
    },
  ];
  const handleDatePress = (day) => {
    navigation.navigate(SCREEN_NAME.ACTIVITY_IN_DATE, {date: day.dateString});
  };
  return (
    <ContainerView>
      <AppStatusBar />
      <ColumnView flex={1}>
        <View
          style={{
            borderBottomWidth: 1,
            marginTop: PADDING.SMALL,
            paddingHorizontal: PADDING.LARGE,
            paddingVertical: PADDING.SMALL,
            borderBottomColor: COLORS.INPUT_BORDER,
          }}>
          <AppText fontWeight={'bold'} fontSize={15}>
            Hoạt động sắp đến
          </AppText>
        </View>

        <FlatList
          style={{
            paddingHorizontal: PADDING.LARGE,
          }}
          data={data}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
            <ActivityDateItem
              name={item.name}
              image={item.image}
              startTime={item.startTime}
              endTime={item.endTime}
              activityType={item.activityType}
              navigation={navigation}
            />
          )}
        />
      </ColumnView>
      <View
        style={{borderBottomWidth: 1, borderBottomColor: COLORS.INPUT_BORDER}}
      />
      <ColumnView flex={2}>
        <Calendar
          current={new Date().toString()}
          onDayPress={handleDatePress}
          firstDay={1}
          markedDates={{
            '2020-11-15': {
              selected: true,
              marked: true,
              selectedColor: COLORS.APP_COLOR,
            },
          }}
        />
      </ColumnView>
    </ContainerView>
  );
};
export default ActivityScreen;
