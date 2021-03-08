import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ICCeklis,
  ICError,
  ICSuccess,
  WarningIndikator,
} from '../../../assets/icon';

const LokasiTandon = ({data, onPress}) => {
  data.peringatan;
  const Icon = () => {
    if (data.peringatan === '0') {
      return <ICSuccess />;
    } else if (data.peringatan === '1') {
      return <WarningIndikator />;
    } else {
      return <ICError />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{data.alamat}</Text>
        <View style={styles.wrapperLogo}>
          <Icon style={styles.logo} />
        </View>
      </View>
      <Text style={styles.desc}>kekeruhan : {data.kekeruhan}</Text>
    </TouchableOpacity>
  );
};

export default LokasiTandon;

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
