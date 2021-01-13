import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILTime} from '../../assets/illustration';
import {Input, JadwalLokasiTandon, LokasiTandon} from '../../components/atoms';
import Header from '../../components/molecules/Header';

const Jadwal = () => {
  return (
    <View style={styles.container}>
      <Header type="Jadwal" />
      <View style={styles.image}>
        <ILTime />
      </View>
      <Text style={styles.title}>Jadwal Pembersihan Bulan Maret :</Text>
      <ScrollView>
        <View style={styles.content}>
          <JadwalLokasiTandon />
          <JadwalLokasiTandon />
          <JadwalLokasiTandon type="Ceklis" />
          <JadwalLokasiTandon />
          <JadwalLokasiTandon type="Ceklis" />
          <JadwalLokasiTandon />
          <JadwalLokasiTandon />
        </View>
      </ScrollView>
    </View>
  );
};

export default Jadwal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7FF',
  },
  image: {
    alignItems: 'center',
    marginTop: 11,
    marginBottom: 30,
  },
  content: {
    paddingHorizontal: 19,
    paddingTop: 5,
  },
  title: {
    paddingHorizontal: 19,
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    marginBottom: 19,
  },
});
