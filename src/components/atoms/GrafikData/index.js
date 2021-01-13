import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICCeklis, ICWarning} from '../../../assets/icon';

const GrafikData = ({status}) => {
  const Icon = () => {
    if (status === 'DIBERSIHKAN') {
      return <ICCeklis />;
    }
    if (status === 'KOTOR') {
      return <ICWarning />;
    }
    return <ICCeklis />;
  };

  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.status}>{status}</Text>
      <View style={styles.tandon}>
        <Text style={styles.number}>174</Text>
        <Text style={styles.desc}>Tandon</Text>
      </View>
    </View>
  );
};

export default GrafikData;

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 170,
    backgroundColor: '#FFFCFC',
    alignSelf: 'flex-start',
    padding: 8,
    marginRight: 18,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  status: {
    color: '#6C7098',
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    marginBottom: 5,
    marginTop: 5,
  },
  tandon: {
    flexDirection: 'row',
  },
  number: {
    color: '#58567D',
    fontSize: 35,
    fontFamily: 'Assistant-ExtraBold',
  },
  desc: {
    color: '#6C7098',
    fontSize: 14,
    fontFamily: 'Assistant-Bold',
    marginLeft: 10,
    marginTop: 20,
  },
});
