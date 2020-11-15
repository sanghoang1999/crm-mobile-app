import React from 'react'
import { StyleSheet, Text, View, ScrollView ,TouchableOpacity} from 'react-native'

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../constants/Theme';
const NoteDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Title
        </Text>

      <TouchableOpacity
          >
          <FontAwesomeIcon icon={faEllipsisV} size={30} color={`${COLORS.WHITE}`} />
      </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentWrap}>
        <View >
          <Text>
            Content
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default NoteDetailScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginVertical:10,
    justifyContent:'center'
  },
  header: {
    backgroundColor:'#9EACFA',
    paddingHorizontal: 20,
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  title:{
    fontSize:24,
    color:'white'
  },
  contentWrap: {
    flex:1,
    backgroundColor:"#C6CFFE"
  }
})
 