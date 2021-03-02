import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Indikator = ({type}) => {
  const Icon = () => {
    if (type === '0') {
      return <Text>Air Dalam Keadaan Bersih</Text>;
    } else if (type === '1') {
      return <Text>Air Dalam Keadaan Keruh</Text>;
    } else {
      return <Text>Air Dalam Keadaan Kotor</Text>;
    }
  };
  return (
    <View style={styles.keterangan(type)}>
      <Text style={styles.keteranganIndikator}>
        <Icon />
      </Text>
    </View>
  );
};

export default Indikator;

const styles = StyleSheet.create({
  keterangan: (type) => ({
    backgroundColor: type === 0 ? '#4BD8A5' : type === '1' ? '#E1CC82' : 'red',
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
