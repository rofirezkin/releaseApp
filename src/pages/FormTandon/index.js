import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Arrow, Button, Gap, Header, Input} from '../../components';
import {useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const FormTandon = ({navigation}) => {
  const [userData, setUserData] = useState([]);

  const [form, setForm] = useForm({
    number: '',
    user: '',
    jadwal: '',
    jadwal2: '',
    alamat: '',
  });

  const onRegister = () => {
    const data = {
      number: form.number,
      user: form.user,
      jadwal: form.jadwal,
      jadwal2: form.jadwal2,
      alamat: form.alamat,
      kekeruhan: '',
      peringatan: '',
    };

    if (data.number.length > 0) {
      Fire.database()
        .ref('dataTandon/' + form.number + '/')
        .set(data);

      showMessage({
        message: 'Anda Berhasil Menginput Tandon Baru',
        type: 'default',
        backgroundColor: 'green',
        color: 'white',
      });
      navigation.replace('MainApp');
    } else {
      showMessage({
        message: 'Nomor Anda belum di input',
        type: 'default',
        backgroundColor: 'red',
        color: 'white',
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header type="Tambah Tandon" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={45} />
            <Input
              type="Nomor Hp"
              value={form.username}
              onChangeText={(value) => setForm('number', value)}
            />
            <Gap height={13} />
            <Input
              type="Pemilik Tandon"
              value={form.username}
              onChangeText={(value) => setForm('user', value)}
            />
            <Gap height={13} />
            <Input
              type="Jadwal Pertama"
              value={form.nama}
              onChangeText={(value) => setForm('jadwal', value)}
            />
            <Gap height={13} />
            <Input
              type="Jadwal Kedua"
              value={form.nama}
              onChangeText={(value) => setForm('jadwal2', value)}
            />
            <Gap height={13} />
            <Input
              type="Alamat"
              value={form.nama}
              onChangeText={(value) => setForm('alamat', value)}
            />
            <Gap height={40} />
            <View style={styles.button}>
              <Button title="Kirim" onPress={onRegister} />
            </View>
            <Gap height={40} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default FormTandon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
