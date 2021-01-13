import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Arrow, Button, Gap, Header, Input} from '../../components';
import {useForm} from '../../utils';
import {Fire} from '../../config';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    username: '',
    nama: '',
    email: '',
    password: '',
  });

  const onRegister = () => {
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        console.log('sukses', success);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.log('Error', errorMessage);

        // ...
      });
  };
  return (
    <View style={styles.container}>
      <Header type="Register" />
      <View style={styles.arrow}>
        <Arrow
          style={styles.arrow}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={styles.content}>
        <Gap height={45} />
        <Input
          type="Username"
          value={form.username}
          onChangeText={(value) => setForm('username', value)}
        />
        <Gap height={13} />
        <Input
          type="Nama"
          value={form.nama}
          onChangeText={(value) => setForm('nama', value)}
        />
        <Gap height={13} />
        <Input
          type="Email"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={13} />
        <Input
          type="Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={40} />
        <View style={styles.button}>
          <Button title="Register" onPress={onRegister} />
        </View>
      </View>
    </View>
  );
};

export default Register;

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
