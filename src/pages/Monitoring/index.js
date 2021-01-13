import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICArrowBack} from '../../assets/icon';
import {
  Arrow,
  Button,
  Gap,
  Header,
  Indikator,
  StatusMonitoring,
} from '../../components';

const Monitoring = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header type="Monitoring" />
      <View style={styles.arrow}>
        <Arrow
          style={styles.arrow}
          onPress={() => navigation.navigate('Lokasi')}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.indikator}>
          <View style={styles.boxIndikator}>
            <Text style={styles.title}>Indikator :</Text>
            <Indikator type="Bersih" />
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
            <Text style={styles.lokasi}>
              Kp. Sukapura Desa Mekarjaya RT 03 RW 04
            </Text>
          </View>
          <View style={styles.warpStatus}>
            <StatusMonitoring status="DATA" />
            <StatusMonitoring status="KEKERUHAN" />
          </View>
          <Gap height={20} />
          <Text style={styles.title}>Jadwal Pembersihan :</Text>
          <Text>Calender</Text>
          <View style={styles.konfirmasi}>
            <Text style={styles.textKonfirmasi}>
              Konfirmasi ke pelanggan tandon sudah Dibersihkan
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            title="Konfirmasi"
            onPress={() => navigation.navigate('Sukses')}
          />
        </View>
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
    paddingHorizontal: 19,
    marginTop: 36,
    alignItems: 'center',
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
  },
  indikator: {
    width: 342,
    height: 252,
    backgroundColor: '#FFFCFC',
    borderRadius: 10,
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
    paddingHorizontal: 33,
    paddingVertical: 5,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    marginBottom: 8,
  },
  keterangan: {
    backgroundColor: '#4BD8A5',
    width: 276,
    height: 76,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
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
