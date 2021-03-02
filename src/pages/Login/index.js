import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {Button, Gap, Input} from '../../components/atoms';
import {useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});

  const login = () => {
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        Fire.database()
          .ref('admin/')
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        const errorMessage = err.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: 'red',
          color: 'white',
        });
      });
  };
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.page}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai Monitoring</Text>
          <View style={styles.input}>
            <Input
              type="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={19} />
            <Input
              secureTextEntry
              type="Password"
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
            />
            <Gap height={19} />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottom2}>
          <Gap height={50} />
          <View style={styles.button}>
            <Button title="Login" onPress={login} />
          </View>
          <Gap height={14} />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 32,
    height: 420,
    backgroundColor: 'white',
    borderBottomRightRadius: 50,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Assistant-SemiBold',
    marginTop: 30,
    marginBottom: 30,
    maxWidth: 170,
  },
  input: {
    marginTop: -10,
  },
  wrapper: {
    backgroundColor: '#223694',
  },
  bottom: {
    backgroundColor: 'white',
  },
  bottom2: {
    backgroundColor: '#223694',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    height: 500,
  },
  button: {
    marginTop: -300,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Assistant-Regular',
  },
});
