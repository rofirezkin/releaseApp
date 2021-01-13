import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {ILGrafik} from '../../assets/illustration';
import {
  GrafikData,
  JadwalLokasiTandon,
  LokasiTandon,
} from '../../components/atoms';
import Header from '../../components/molecules/Header';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header type="Dashboard" />
      <View style={styles.grafik}>
        <ILGrafik />
      </View>
      <Text style={styles.title}>Laporan Monitoring Minggu ini : </Text>
      <View style={styles.cardGrafik}>
        <GrafikData status="DIBERSIHKAN" />
        <GrafikData status="KOTOR" />
      </View>
      <Text style={styles.desc}>Lokasi Tandon Kotor :</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View>
            <View style={styles.cardTandon}>
              <JadwalLokasiTandon />
              <JadwalLokasiTandon />
              <JadwalLokasiTandon />
            </View>
            <Text style={styles.textAll}>Lihat Selengkapnya ...</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FF',
    flex: 1,
  },
  grafik: {
    marginTop: 17,
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 17,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    paddingHorizontal: 17,
    marginTop: 17,
  },
  cardGrafik: {
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
    paddingHorizontal: 17,
  },
  desc: {
    fontSize: 16,
    fontFamily: 'Assistant-SemiBold',
    marginBottom: 10,
    paddingHorizontal: 17,
  },
  textAll: {
    fontSize: 15,
    fontFamily: 'Assistant-Regular',
    color: '#6C7098',
    marginBottom: 26,
  },
});
