import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Link = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  box: {
    width: 30,
    height: 30,
    backgroundColor: '#FFFF',
  },
});
