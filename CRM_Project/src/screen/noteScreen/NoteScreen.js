import React, {useEffect} from 'react';
import {View, Text, ScrollView,TouchableOpacity} from 'react-native';
import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
import NoteCard from '../../component/noteCard/NoteCard'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {styles} from './NoteStyle';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../constants/Theme';
const NoteScreen = ({navigation, route}) => {
  return (
    <View style={{position:'relative',height:'100%'}}> 
      <AppStatusBar/>
      <ScrollView>
        <NoteCard navigation={navigation}/> 
      </ScrollView>
      <TouchableOpacity
          style={styles.floatbtn}
          >
          <FontAwesomeIcon icon={faPlus} size={30} color={`${COLORS.WHITE}`} />
      </TouchableOpacity>
    </View>
  );
};
export default NoteScreen;
