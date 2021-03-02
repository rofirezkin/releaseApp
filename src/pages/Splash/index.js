import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          //user login

          navigation.replace('MainApp');
        } else {
          //userlogout
          navigation.replace('GetStarted');
        }
      }, 3000);
    });
    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.tulisan}>mangjasa.com</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#CFDAE3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tulisan: {
    fontSize: 20,

    color: 'black',
    marginTop: 20,
  },
});

//dalam navigation.replace itu banyak banget opsinya
//ada replace,navigate
//pas make replace maka fungsi back button tidak bisa berjalan
//dalam artian ketika masuk kehalaman getstarted maka app akan keluar jadi tidak simpan histori
//beda dengan navigate = setelh splashscreen dan get started pas di back maka dia kembali kehalaman sebelumnya
