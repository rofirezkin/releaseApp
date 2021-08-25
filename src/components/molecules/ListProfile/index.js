import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILLisProfile} from '../../../assets/illustration';

const ListProfile = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <ILLisProfile />
    </TouchableOpacity>
  );
};

export default ListProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BABDDD',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: 'white',
  },
});
