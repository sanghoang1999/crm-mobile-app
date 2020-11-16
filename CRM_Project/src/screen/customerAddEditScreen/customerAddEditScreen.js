import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {styles} from './styles';

import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
import {Formik} from 'formik';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {COLORS} from '../../constants/Theme';
import {ImageIndex} from '../../assets/images/imageIndex';

const CustomerAddEditScreen = ({navigation, route}) => {
  const submitInfomation = (values) => {};
  return (
    <View>
      <AppStatusBar />
      <ScrollView style={styles.container}>
        <Formik
          style={styles.form}
          initialValues={{
            name: '',
            phone: '',
            address: '',
            channel: 'Facebook',
            link: '',
          }}
          onSubmit={(values) => {
            console.log(values);
            submitInfomation(values);
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <>
              <View style={styles.field}>
                <Text style={{fontWeight: 'bold'}}>Nhap ten khach hang:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('name')}
                  value={values.name}
                  onBlur={handleBlur('name')}
                  placeholder={'Nguyen Van A'}
                />
              </View>
              <View style={styles.field}>
                <Text style={{fontWeight: 'bold'}}>So dien thoai:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('phone')}
                  value={values.phone}
                  onBlur={handleBlur('phone')}
                  placeholder={'0123456789'}
                />
              </View>
              <View style={styles.field}>
                <Text style={{fontWeight: 'bold'}}>Dia chi:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('address')}
                  value={values.address}
                  onBlur={handleBlur('address')}
                  placeholder={'49 Hoang Du Khuong,...'}
                />
              </View>
              <View style={styles.field}>
                <Text style={{fontWeight: 'bold'}}>Kenh lien lac</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Picker
                    style={{width: '35%', borderColor: 'black'}}
                    onValueChange={handleChange('channel')}
                    selectedValue={values.channel}>
                    <Picker.Item label="Facebook" value="Facebook" />
                    <Picker.Item label="LinkedIn" value="LinkedIn" />
                    <Picker.Item label="Instagram" value="Instagram" />
                    <Picker.Item label="Other" value="Other" />
                  </Picker>
                  <TextInput
                    style={{...styles.input, width: '65%'}}
                    onChangeText={handleChange('link')}
                    value={values.link}
                    onBlur={handleBlur('link')}
                    placeholder={'http://www.nguyenvana.com.vn'}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.btn_upload}>
                <FontAwesomeIcon
                  icon={faPlus}
                  size={20}
                  color={`${COLORS.WHITE}`}
                />
              </TouchableOpacity>
              <Image style={styles.img} source={ImageIndex.customer_edit} />
              <View
                style={{
                  ...styles.field,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  style={{...styles.form_btn, backgroundColor: '#FF0000'}}>
                  <Text style={styles.form_btn_text}>HUY</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.form_btn}
                  onPress={handleSubmit}>
                  <Text style={styles.form_btn_text}>LUU</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};
export default CustomerAddEditScreen;
