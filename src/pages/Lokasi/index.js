import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILMap} from '../../assets/illustration';
import {BtnSend, Gap, LokasiTandon} from '../../components/atoms';
import {InputSearch} from '../../components/molecules';
import Header from '../../components/molecules/Header';

const Lokasi = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header type="Lokasi" />
      <View style={styles.image}>
        <ILMap />
      </View>
      <View style={styles.wrap}>
        <InputSearch />
        <BtnSend onPress={() => navigation.navigate('Monitoring')} />
      </View>
      <View style={styles.wrapper}>
        <Gap height={16} />
        <Text style={styles.title}>Lokasi Monitoring : </Text>
        <Gap height={10} />
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View>
            <Gap height={16} />
            <LokasiTandon type="Ceklis" />
            <LokasiTandon />
            <LokasiTandon />
            <LokasiTandon type="Ceklis" />
            <LokasiTandon />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Lokasi;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FF',
    flex: 1,
  },
  wrap: {
    paddingHorizontal: 19,
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
  },
  image: {
    alignItems: 'center',
    marginTop: 11,
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 19,
  },
  wrapper: {
    paddingHorizontal: 19,
  },
});
