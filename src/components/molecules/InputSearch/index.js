import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {BtnSend} from '../../atoms';

const InputSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Cari Lokasi Monitoring"></TextInput>
      </View>
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 20,
    width: 315,
    fontSize: 15,
    fontFamily: 'Assistant-Regular',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  wrapper: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 20,
  },
});
