import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICSend} from '../../../assets/icon';

const BtnSend = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ICSend />
    </TouchableOpacity>
  );
};

export default BtnSend;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2B3695',
    width: 36,
    height: 36,
    borderRadius: 10,
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 4,
    paddingBottom: 8,
    marginTop: 7,
    marginLeft: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
