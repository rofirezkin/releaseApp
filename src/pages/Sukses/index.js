import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILKonfirmasi, ILLogo} from '../../assets/illustration';
import {Button} from '../../components/atoms';

const Sukses = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.page}>
        <View style={styles.background}>
          <ILLogo style={styles.logo} />
          <ILKonfirmasi style={styles.hello} />
        </View>
      </View>
      <View style={styles.wrapper2}>
        <View style={styles.content}>
          <Text style={styles.desc}>Selamat !</Text>
          <Text style={styles.desc3}>Anda Berhasil Membersihkan Toran</Text>
          <Text style={styles.desc2}>
            Dan Sudah Mengkonfirmasi Ke pelanggan
          </Text>
          <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
  );
};

export default Sukses;

const styles = StyleSheet.create({
  background: {
    height: 360,
    alignItems: 'center',
    backgroundColor: '#F3F7FF',
    borderBottomRightRadius: 100,
  },
  wrapper: {
    backgroundColor: '#F3F7FF',
  },
  wrapper2: {
    backgroundColor: '#F3F7FF',
  },
  hello: {
    marginTop: 21,
  },
  page: {
    backgroundColor: '#2B3695',
  },
  logo: {
    marginTop: 32,
    marginLeft: -280,
  },
  content: {
    backgroundColor: '#2B3695',
    height: 400,
    borderTopLeftRadius: 100,
    alignItems: 'center',
  },
  desc: {
    color: 'white',
    marginTop: 65,
    fontSize: 26,
    fontWeight: '800',
    fontFamily: 'Assistant-Bold',
  },
  desc2: {
    color: 'white',
    fontSize: 15,
    marginBottom: 50,
    fontFamily: 'Assistant-Regular',
    justifyContent: 'center',
    textAlign: 'center',
  },
  desc3: {
    marginTop: 30,
    color: 'white',
    fontSize: 15,
    fontFamily: 'Assistant-Regular',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: 350,
  },
});
