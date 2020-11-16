import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Image, Text, View} from 'react-native';
import {styles} from './styles';

const ContactHistoryCard = (props) => {
  return (
    <>
      <View style={styles.mock}></View>
      <TouchableOpacity style={styles.card}>
        <Image style={styles.avatar} />
        <View style={styles.namebox}>
          <Text>A</Text>
          <Text>Meeting</Text>
        </View>
        <View style={styles.timebox}>
          <Text>dd/MM/yyyy</Text>
          <Text>hh:mm</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ContactHistoryCard;
