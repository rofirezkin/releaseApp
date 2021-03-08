import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'Register' ? '#FFFFFF' : '#E75B74',
    borderRadius: 10,
    paddingVertical: 13,
    width: 157,
  }),
  text: (type) => ({
    fontSize: 20,
    color: type === 'Register' ? '#E75B74' : 'white',
    textAlign: 'center',
    fontWeight: '800',
    fontFamily: 'Assistant-Bold',
  }),
});
