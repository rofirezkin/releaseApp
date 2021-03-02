import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICError, ICSuccess} from '../../../assets/icon';

const JadwalLokasiTandon = ({data, peringatan, onPress}) => {
  const Icon = () => {
    if (peringatan === 0 || peringatan === 1) {
      return <ICSuccess />;
    } else {
      return <ICError />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{data.alamat}</Text>
          <View style={styles.wrapperLogo}>
            <Icon style={styles.logo} />
          </View>
        </View>
        <Text style={styles.desc}>kekeruhan : {data.kekeruhan}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default JadwalLokasiTandon;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    marginBottom: 18,
    paddingLeft: 13,
    paddingTop: 7,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  wrapperLogo: {
    marginTop: 5,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    flex: 1,
  },
  desc: {
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    color: '#A8A8A8',
    marginTop: -17,
  },
  wrapper: {
    flexDirection: 'row',
    marginRight: 20,
  },
});
