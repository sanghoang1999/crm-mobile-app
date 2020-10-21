import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect} from 'react';
import {ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
import CustomerCard from '../../component/CustomerCard/CustomerCard';
import {styles} from './styles';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {SCREEN_NAME} from '../../constants/Key';

const CustomerScreen = ({navigation, route}) => {
  function gotoAddCustomerScreen() {
    navigation.navigate(SCREEN_NAME.CUSTOMER_ADD_SCREEN);
  }
  return (
    <View>
      <AppStatusBar />
      <View style={styles.container}>
        <TextInput style={styles.searchBar} placeholder={'Tim kiem'} />
        <ScrollView style={styles.listContainer}>
          <CustomerCard navigation={navigation} />
        </ScrollView>
        <TouchableOpacity
          style={styles.floatbtn}
          onPress={gotoAddCustomerScreen}>
          <FontAwesomeIcon icon={faPlus} size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomerScreen;
