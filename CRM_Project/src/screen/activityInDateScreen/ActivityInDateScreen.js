import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
import {
  ColumnView,
  ContainerView,
} from '../../component/style/generalComponentStyle';
import {COLORS, PADDING} from '../../constants/Theme';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {styles} from './styles';
import {SCREEN_NAME} from '../../constants/Key';
import {getDateTitleFormat} from '../../utils/dateFormatUtils';
import {ImageIndex} from '../../assets/images/imageIndex';
import ActivityDateItem from '../../component/item/activityDateItem/ActivityDateItem';

const ActivityInDateScreen = ({navigation, route}) => {
  const goToActivityAddScreen = () => {
    navigation.navigate(SCREEN_NAME.ACTIVITY_ADD, {date: Date.now().toString()});
  };
  useEffect(() =>
    navigation.setOptions({
      title: `${getDateTitleFormat(route.params.date)}`,
    }),
  );
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
  ];
  return (
    <ContainerView>
      <AppStatusBar />
      <ColumnView flex={1}>
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
        <TouchableOpacity
          style={styles.floatbtn}
          onPress={goToActivityAddScreen}
          activeOpacity={0.8}>
          <FontAwesomeIcon icon={faPlus} size={30} color={`${COLORS.WHITE}`} />
        </TouchableOpacity>
      </ColumnView>
    </ContainerView>
  );
};
export default ActivityInDateScreen;
