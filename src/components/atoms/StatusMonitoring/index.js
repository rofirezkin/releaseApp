import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICTrafik} from '../../../assets/icon';

const StatusMonitoring = ({status}) => {
  return (
    <View style={styles.container}>
      <ICTrafik />
      <Text style={styles.status}>{status}</Text>
      <View style={styles.tandon}>
        <Text style={styles.number}>174</Text>
        <Text style={styles.desc}>LMS</Text>
      </View>
    </View>
  );
};

export default StatusMonitoring;

const styles = StyleSheet.create({
  container: {
    height: 111,
    width: 162,
    backgroundColor: '#FFFCFC',
    alignSelf: 'flex-start',
    padding: 8,
    marginTop: 35,
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
    marginBottom: 1,
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
