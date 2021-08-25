import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Arrow, Button, Gap, Header, Input, Loading} from '../../components';
import {useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const FormTandon = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useForm({
    number: '',
    user: '',
    jadwal: '',
    jadwal2: '',
    alamat: '',
  });

  const [itemJadwal] = useState([
    {
      id: 1,
      label: 'Januari',
      value: 'Januari',
    },
    {
      id: 2,
      label: 'Februari',
      value: 'Februari',
    },
    {
      id: 3,
      label: 'Maret',
      value: 'Maret',
    },
    {
      id: 4,
      label: 'April',
      value: 'April',
    },
    {
      id: 5,
      label: 'Mei',
      value: 'Mei',
    },
    {
      id: 6,
      label: 'Juni',
      value: 'Juni',
    },
    {
      id: 7,
      label: 'Juli',
      value: 'Juli',
    },
    {
      id: 8,
      label: 'Agustus',
      value: 'Agustus',
    },
    {
      id: 9,
      label: 'September',
      value: 'September',
    },
    {
      id: 10,
      label: 'Oktober',
      value: 'Oktober',
    },
    {
      id: 11,
      label: 'November',
      value: 'November',
    },
    {
      id: 12,
      label: 'Desember',
      value: 'Desember',
    },
  ]);

  const onRegister = () => {
    setLoading(true);
    const data = {
      number: form.number,
      user: form.user,
      jadwal: form.jadwal,
      jadwal2: form.jadwal2,
      alamat: form.alamat,
      kekeruhan: '',
      peringatan: '',
    };

    if (
      data.number.length > 10 &&
      data.user !== '' &&
      data.jadwal !== '' &&
      data.jadwal2 !== '' &&
      data.alamat !== ''
    ) {
      Fire.database()
        .ref('dataTandon/' + form.number + '/')
        .set(data);
      setLoading(false);
      showMessage({
        message: 'Anda Berhasil Menginput Tandon Baru',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
      navigation.replace('MainApp');
    } else {
      setLoading(false);
      showMessage({
        message: 'upps. sepertinya ada yang tidak diinputkan',
        type: 'default',
        backgroundColor: 'red',
        color: 'white',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header type="Tambah Tandon" />
      <View style={styles.arrow}>
        <Arrow style={styles.arrow} onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={45} />
          <Input
            type="Nomor Hp Pemilik Tandon"
            value={form.number}
            onChangeText={(value) => setForm('number', value)}
          />
          <Gap height={13} />
          <Input
            type="Nama Pemilik Tandon"
            value={form.user}
            onChangeText={(value) => setForm('user', value)}
          />
          <Gap height={13} />
          <Input
            label="Jadwal Pertama"
            value={form.jadwal}
            onValueChange={(value) => setForm('jadwal', value)}
            select
            selectItem={itemJadwal}
          />
          <Gap height={13} />
          <Input
            label="Jadwal Kedua"
            value={form.jadwal2}
            select
            selectItem={itemJadwal}
            onValueChange={(value) => setForm('jadwal2', value)}
          />
          <Gap height={13} />
          <Input
            type="Alamat"
            value={form.alamat}
            onChangeText={(value) => setForm('alamat', value)}
          />
          <Gap height={40} />
          <View style={styles.button}>
            <Button title="Tambahkan" onPress={onRegister} />
          </View>
          <Gap height={80} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </View>
  );
};

export default FormTandon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FF',
    flex: 1,
  },
  button: {
    alignItems: 'center',
  },
  arrow: {
    marginTop: -45,
    marginLeft: 10,
  },
  content: {
    paddingHorizontal: 40,
  },
});
