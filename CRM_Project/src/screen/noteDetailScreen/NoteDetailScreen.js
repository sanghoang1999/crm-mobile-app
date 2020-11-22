import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {COLORS} from '../../constants/Theme';
import {useState} from 'react';
import {TextInput} from 'react-native';
const NoteDetailScreen = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  var title = <Text style={styles.title}>Title</Text>;
  var content = <Text style={{height: 100}}>Content</Text>;
  if (isEdit) {
    title = <TextInput defaultValue="Title" style={styles.title} />;
    content = (
      <TextInput
        defaultValue="Content"
        multipleLine={true}
        style={{height: 200, textAlignVertical: 'top'}}
      />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {title}
        <TouchableOpacity
          onPress={() => {
            setShowBtn((prev) => !prev);
          }}>
          <FontAwesomeIcon
            icon={faEllipsisV}
            size={30}
            color={`${COLORS.WHITE}`}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.contentWrap}>
        {showBtn && (
          <View style={styles.btnGroup}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setIsEdit(true);
                setShowBtn(false);
              }}>
              <Text>Chinh sua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text>Xoa</Text>
            </TouchableOpacity>
          </View>
        )}
        {content}
      </ScrollView>
    </View>
  );
};

export default NoteDetailScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginVertical: 10,
  },
  header: {
    backgroundColor: '#9EACFA',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '10%',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  contentWrap: {
    backgroundColor: '#C6CFFE',
    height: '90%',
  },
  btnGroup: {
    position: 'absolute',
    top: 0,
    right: 10,
    width: 100,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1,
    zIndex: 5,
  },
  btn: {
    paddingVertical: 10,
    paddingLeft: 10,
    borderWidth: 0.5,
  },
});
