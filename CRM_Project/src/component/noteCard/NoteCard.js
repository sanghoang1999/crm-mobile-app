import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SCREEN_NAME } from '../../constants/Key'

const NoteCard = ({navigation}) => {
  const goToNoteDetailScreen = ()=> {
    navigation.navigate(SCREEN_NAME.NOTE_DETAIL_SCREEN)
  }
  return (
    <TouchableOpacity style={styles.test} onPress={goToNoteDetailScreen}>
      <View style={styles.card}> 
        <Text style={styles.note}>Notes</Text>
        <Text style={styles.time}>8:23 AM</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NoteCard

const styles = StyleSheet.create({
  test:{
    flex:1,
    alignItems:"center",
  },
  card: {
    width: '94%',
    height: 83,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.0,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent:'space-between',
    borderLeftWidth:12,
    borderLeftColor:'#00A3FF'
  },
  note: {
    fontSize:24
  },
  time: {
    fontSize:24,
    color:'#9B9B9B'
  }
})
