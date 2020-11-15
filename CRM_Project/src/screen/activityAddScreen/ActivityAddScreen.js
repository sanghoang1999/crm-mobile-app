import React, {useState} from 'react';
import CommonButton from '../../component/button/commonButton/CommonButton';
import {
  AppText,
  ColumnView,
  RowView,
} from '../../component/style/generalComponentStyle';
import {Container} from '../passwordChangingScreen/PasswordChangeScreenStyles';
import {COLORS, PADDING} from '../../constants/Theme';
import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {RadioButton} from 'react-native-paper';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import TimePicker from '../../component/picker/timePicker/TimePicker';
import {getDateTitleFormat} from '../../utils/dateFormatUtils';
import { SCREEN_NAME } from '../../constants/Key';

const ActivityAddScreen = ({navigation, route}) => {
  const [selectedValue, setSelectedValue] = useState('fb');
  const [checked, setChecked] = useState('Buổi hẹn');
  const [startTime, setStartTime] = useState(new Date().toString());
  const [endTime, setEndTime] = useState(new Date().toString());
  const setCheckMeeting = () => {
    setChecked('Buổi hẹn');
  };
  const setCheckContact = () => {
    setChecked('Liên lạc');
  };
  return (
    <Container style={{backgroundColor: COLORS.WHITE}}>
      <AppStatusBar />
      <RowView
        flex={1}
        paddingHorizontal={PADDING.LARGE}
        paddingVertical={PADDING.LARGE}>
        <AppText>Ngày {getDateTitleFormat(Date.now())} </AppText>
      </RowView>

      <ColumnView
        flex={1}
        paddingHorizontal={PADDING.LARGE}
        paddingVertical={PADDING.LARGE}>
        <AppText>
          Chọn khách hàng <AppText textColor={COLORS.RED}>*</AppText>
        </AppText>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: PADDING.SMALL,
            paddingVertical: PADDING.LARGE,
            borderColor: COLORS.INPUT_BORDER,
            borderWidth: 1,
          }}
          activeOpacity={0.8}
          onPress={()=>navigation.navigate(SCREEN_NAME.ACTIVITY_CUSTOMER_FINDING)}
          >
          <FontAwesomeIcon icon={faPlus} size={30} color={COLORS.APP_COLOR} />
        </TouchableOpacity>
      </ColumnView>
      <ColumnView
        flex={1}
        paddingHorizontal={PADDING.SMALL}
        paddingVertical={PADDING.LARGE}>
        <RowView alignItems={'center'}>
          <RadioButton
            value="Buổi hẹn"
            status={checked === 'Buổi hẹn' ? 'checked' : 'unchecked'}
            onPress={setCheckMeeting}
            color="#0038ff"
          />
          <AppText>Buổi hẹn</AppText>
        </RowView>
        {checked === 'Buổi hẹn' && (
          <TextInput
            placeholder={'Nhập địa chỉ'}
            style={{
              marginTop: PADDING.SMALL,
              borderWidth: 1,
              borderColor: COLORS.INPUT_BORDER,
              backgroundColor: COLORS.WHITE,
              paddingHorizontal: PADDING.MEDIUM,
              borderRadius: PADDING.MEDIUM,
              marginHorizontal: PADDING.MEDIUM,
            }}
            multiline={true}
          />
        )}
      </ColumnView>
      <ColumnView
        flex={1}
        paddingHorizontal={PADDING.SMALL}
        paddingVertical={PADDING.LARGE}>
        <RowView alignItems={'center'}>
          <RadioButton
            value="j"
            status={checked === 'Liên lạc' ? 'checked' : 'unchecked'}
            onPress={setCheckContact}
            color="#0038ff"
          />
          <AppText>Liên lạc</AppText>
        </RowView>
        
        {checked === 'Liên lạc' && (
          <View style={{
              borderWidth: 1,
              borderColor: COLORS.INPUT_BORDER,
              backgroundColor: COLORS.WHITE,
              paddingLeft: PADDING.MEDIUM,
              borderRadius: PADDING.MEDIUM,
              marginHorizontal: PADDING.MEDIUM,

          }}>
            <Picker
            selectedValue={selectedValue}
            style={{height: 50}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Facebook" value="fb" />
            <Picker.Item label="Skype" value="sk" />
            <Picker.Item label="Zalo" value="za" />
          </Picker>
          </View>
          
        )}
      </ColumnView>
      <ColumnView
        flex={1}
        paddingHorizontal={PADDING.LARGE}
        paddingVertical={PADDING.LARGE}>
        <AppText>
          Thời gian bắt đầu <AppText textColor={COLORS.RED}>*</AppText>
        </AppText>
        <TimePicker time={startTime} setTime={setStartTime} />
      </ColumnView>
      <ColumnView
        flex={1}
        paddingHorizontal={PADDING.LARGE}
        paddingVertical={PADDING.LARGE}>
        <AppText>
          Thời gian kết thúc <AppText textColor={COLORS.RED}>*</AppText>
        </AppText>
        <TimePicker
          time={endTime}
          setTime={setEndTime}
          minimumDate={startTime}
        />
      </ColumnView>
      <ColumnView
        flex={3}
        paddingHorizontal={PADDING.LARGE}
        paddingVertical={PADDING.LARGE}>
        <AppText>Nội dung</AppText>
        <TextInput
          style={{
            marginTop: PADDING.SMALL,
            borderWidth: 1,
            borderColor: COLORS.INPUT_BORDER,
            backgroundColor: COLORS.WHITE,
            paddingHorizontal: PADDING.MEDIUM,
            borderRadius: PADDING.MEDIUM,
          }}
          multiline={true}
        />
      </ColumnView>
      <RowView
        flex={1}
        justifyContent={'space-between'}
        alignItems={'center'}
        paddingHorizontal={PADDING.LARGE}
        style={{marginBottom:10}}
        >
        <CommonButton
          title={'XÓA'}
          onPress={() => console.log('xóa')}
          buttonColor={COLORS.RED}
          textColor={COLORS.WHITE}
          width={125}
          paddingVertical={8}
        />
        <CommonButton
          title={'LƯU'}
          onPress={() => console.log('Lưu')}
          buttonColor={COLORS.APP_COLOR}
          textColor={COLORS.WHITE}
          width={125}
          paddingVertical={8}
        />
      </RowView>
    </Container>
  );
};
export default ActivityAddScreen;
