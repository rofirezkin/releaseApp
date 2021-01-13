import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Indikator = ({type}) => {
  return (
    <View style={styles.keterangan(type)}>
      <Text style={styles.keteranganIndikator}>Air Dalam Keadaan {type}</Text>
    </View>
  );
};

export default Indikator;

const styles = StyleSheet.create({
  keterangan: (type) => ({
    backgroundColor: type === 'Bersih' ? '#4BD8A5' : '#6C7098',
    width: 276,
    height: 76,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  }),
  keteranganIndikator: {
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    color: '#6C7098',
  },
});
