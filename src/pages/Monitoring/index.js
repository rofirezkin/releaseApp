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
  BoxIndikator,
} from '../../components';

const Monitoring = ({navigation, route}) => {
  const dataMonitoring = route.params;
  const peringatan = dataMonitoring.peringatan;

  return (
    <View style={styles.container}>
      <Header type="Monitoring" />
      <View style={styles.arrow}>
        <Arrow style={styles.arrow} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BoxIndikator
            peringatan={peringatan}
            alamat={dataMonitoring.alamat}
          />
          <View>
            <View style={styles.warpStatus}>
              <StatusMonitoring status="DATA" />
              <StatusMonitoring
                status="KEKERUHAN"
                data={dataMonitoring.kekeruhan}
              />
            </View>
            <Gap height={20} />
            <Text style={styles.titleJadwal}>Jadwal Pembersihan :</Text>
            <Gap height={20} />
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
    paddingHorizontal: 18,
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

  warpStatus: {
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleJadwal: {
    marginHorizontal: 8,
    fontSize: 16,
  },
});
