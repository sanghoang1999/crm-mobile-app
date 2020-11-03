import React, {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
import {styles} from './styles';
import {ImageIndex} from '../../assets/images/imageIndex';
import {ImageContainer} from '../../component/style/generalComponentStyle';
import {viewportHeight, viewportWidth} from '../../constants/Theme';
import Badge from '../../component/Badge/Badge';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
import {ACTIVITY_TYPE} from '../../constants/Key';

const CustomerDetailScreen = (props) => {
  const [checked, setChecked] = useState(ACTIVITY_TYPE.APPOINTMENT);
  return (
    <View>
      <AppStatusBar />
      <View style={styles.container}>
        <View style={styles.head}>
          <TouchableOpacity style={styles.avatar}>
            <Badge value={'+'} />
          </TouchableOpacity>

          <Image style={styles.img} source={ImageIndex.customer_detail} />
        </View>
        <View style={styles.card}>
          <Text style={styles.textSection}>Thong tin ca nhan</Text>
          <View style={styles.textRow}>
            <Text style={styles.title}>Ten:</Text>
            <Text style={styles.content}>Name</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.title}>So dien thoai:</Text>
            <Text style={styles.content}>0123456789</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.title}>Dia chi:</Text>
            <Text style={styles.content}>lkjaklwjfijdf</Text>
          </View>
          <Text style={styles.textSection}>Kenh lien lac</Text>
          <View style={styles.textRow}>
            <Text style={styles.title}>Facebook:</Text>
            <Text style={styles.content}>
              http://www.facebook.com/131413354
            </Text>
          </View>
          <Button
            onPress={() => {}}
            title="Chinh sua"
            color="rgba(83, 109, 254, 1)"
          />
        </View>
        <View style={{...styles.card, height: 130}}>
          <Text style={styles.textSection}>Hoat dong sap toi</Text>
          <View style={styles.radiogroup}>
            <View style={styles.radio}>
              <RadioButton.Android
                value={ACTIVITY_TYPE.APPOINTMENT}
                status={
                  checked === ACTIVITY_TYPE.APPOINTMENT
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => {
                  setChecked(ACTIVITY_TYPE.APPOINTMENT);
                }}
              />
              <Text>Buoi Hen</Text>
            </View>
            <View style={styles.radio}>
              <RadioButton.Android
                value={ACTIVITY_TYPE.CONTACT}
                status={
                  checked === ACTIVITY_TYPE.CONTACT ? 'checked' : 'unchecked'
                }
                onPress={() => {
                  setChecked(ACTIVITY_TYPE.CONTACT);
                }}
              />
              <Text>Lien lac</Text>
            </View>
          </View>

          <View style={styles.textRow}>
            <Text style={styles.title}>Thoi gian:</Text>
            <Text style={styles.content}>dd/MM/yyyy</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.title}>Dia chi:</Text>
            <Text style={styles.content}>lkjaklwjfijdf</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomerDetailScreen;
