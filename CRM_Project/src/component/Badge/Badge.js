import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Badge = ({value}) => {
  return (
    <View style={styles.badge}>
      <Text style={{fontSize: 20, color: 'white'}}>{value}</Text>
    </View>
  );
};

export default Badge;
