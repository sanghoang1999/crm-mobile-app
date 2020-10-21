import React, {useEffect} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {ImageIndex} from '../../assets/images/imageIndex';
import {SCREEN_NAME} from '../../constants/Key';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomerCard = (props) => {
  function gotoDetail() {
    props.navigation.navigate(SCREEN_NAME.CUSTOMER_DETAIL_SCREEN);
  }
  return (
    <TouchableOpacity style={styles.card} onPress={gotoDetail}>
      <Image style={styles.avatar} source={ImageIndex.ic_account_focused} />
      <Text style={styles.name}>Name</Text>
    </TouchableOpacity>
  );
};
export default CustomerCard;
