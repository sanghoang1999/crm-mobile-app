import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {IconContainer} from '../../style/generalComponentStyle';
import {ImageIndex} from '../../../assets/images/imageIndex';
import {COLORS, PADDING} from '../../../constants/Theme';
import {getTimeFormat} from '../../../utils/dateFormatUtils';
const TimePicker = ({time, setTime}) => {
  const [timeInit, setTimeInit] = useState(new Date(time));
  const [show, setShow] = useState(false);
  const showTimePicker = () => {
    setShow(true);
  };
  const onChange = (event, selectedTime) => {
    setShow(false);
    setTime(selectedTime);
    setTimeInit(selectedTime);
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: COLORS.INPUT_BORDER,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: PADDING.MEDIUM,
          borderRadius: 10,
          marginTop: 5,
          paddingVertical: PADDING.SMALL,
        }}
        activeOpacity={0.5}
        onPress={showTimePicker}>
        <Text>{getTimeFormat(timeInit)}</Text>
        <IconContainer width={20} height={20} source={ImageIndex.ic_clock} />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={timeInit}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default TimePicker;
