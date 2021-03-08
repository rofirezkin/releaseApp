import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Arrow,
  Button,
  Gap,
  Header,
  StatusMonitoring,
  Kalender,
} from '../../components';

const Monitoring = ({navigation, route}) => {
  const dataMonitoring = route.params;
  const peringatan = dataMonitoring.peringatan;

  const GetPeringatan = () => {
    if (peringatan === '0') {
      return (
        <View style={styles.keterangan}>
          <Text style={styles.keteranganIndikator}>
            Air Dalam keadaan bersih
          </Text>
        </View>
      );
    } else if (peringatan === '1') {
      return (
        <View style={styles.keterangan}>
          <Text style={styles.keteranganIndikator}>
            Air Dalam keadaan keruh
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.keterangan}>
          <Text style={styles.keteranganIndikator}>
            Air Dalam Keadaan Kotor
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header type="Monitoring" />
      <View style={styles.arrow}>
        <Arrow style={styles.arrow} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.indikator}>
            <View style={styles.boxIndikator}>
              <Text style={styles.title}>Indikator :</Text>
              <View style={styles.keterangan(peringatan)}>
                <GetPeringatan />
              </View>
              <Text style={styles.title}>Keterangan :</Text>
              <Gap height={6} />
              <View style={styles.warnaKeterangan}>
                <View style={styles.hijau}>
                  <Text style={styles.text}>Bersih</Text>
                </View>
                <View style={styles.kuning}>
                  <Text style={styles.text}>Keruh</Text>
                </View>
                <View style={styles.merah}>
                  <Text style={styles.text}>Kotor</Text>
                </View>
              </View>
              <Text style={styles.title}>Lokasi :</Text>
              <Text style={styles.lokasi}>{dataMonitoring.alamat}</Text>
            </View>
          </View>
          <View>
            <View style={styles.warpStatus}>
              <StatusMonitoring status="DATA" />
              <StatusMonitoring
                status="KEKERUHAN"
                data={dataMonitoring.kekeruhan}
              />
            </View>
            <Gap height={20} />
            <Text style={styles.title}>Jadwal Pembersihan :</Text>
            <Kalender
              bulan={dataMonitoring.jadwal}
              bulanKedua={dataMonitoring.jadwal2}
            />
            <View style={styles.konfirmasi}>
              <Text style={styles.textKonfirmasi}>
                Konfirmasi ke pelanggan tandon sudah Dibersihkan
              </Text>
              <Button
                title="Konfirmasi"
                onPress={() => navigation.navigate('Sukses')}
              />
            </View>

            <Gap height={20} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Monitoring;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FF',
    flex: 1,
  },
  button: {
    marginTop: 260,
  },
  arrow: {
    marginTop: -45,
    marginLeft: 10,
  },
  content: {
    paddingHorizontal: 10,
    paddingTop: 20,

    paddingBottom: 50,
  },
  konfirmasi: {
    alignItems: 'center',
  },
  textKonfirmasi: {
    fontSize: 16,
    maxWidth: 200,
    textAlign: 'center',
    fontFamily: 'Assistant-SemiBold',
    color: '#3F3D56',
    marginBottom: 14,
    paddingTop: 10,
  },
  indikator: {
    width: '100%',
    height: 252,
    borderRadius: 10,
    backgroundColor: '#FFFCFC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  boxIndikator: {
    paddingHorizontal: 13,
    paddingVertical: 5,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    marginBottom: 8,
  },
  keterangan: (peringatan) => ({
    backgroundColor:
      peringatan === '0'
        ? '#4BD8A5'
        : peringatan === '1'
        ? '#ECD55C'
        : '#F86D70',
    width: '100%',
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
  warnaKeterangan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  hijau: {
    width: 78,
    height: 15,
    backgroundColor: '#4BD8A5',
    borderRadius: 5,
    alignItems: 'center',
  },
  kuning: {
    width: 78,
    height: 15,
    backgroundColor: '#ECD55C',
    borderRadius: 5,
    alignItems: 'center',
  },
  merah: {
    width: 78,
    height: 15,
    backgroundColor: '#F86D70',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    marginTop: 17,
    fontSize: 12,
    fontFamily: 'Assistant-SemiBold',
    color: '#A8A8A8',
  },
  lokasi: {
    fontFamily: 'Assistant-SemiBold',
    fontSize: 15,
    color: '#6C7098',
  },
  warpStatus: {
    flexDirection: 'row',
  },
});
