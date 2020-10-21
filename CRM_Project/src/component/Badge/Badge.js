import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Badge = (props) => {
  return (
    <View style={styles.badge}>
      <Text style={{fontSize: 20, color: 'white'}}>{props.value}</Text>
    </View>
  );
};

export default Badge;
