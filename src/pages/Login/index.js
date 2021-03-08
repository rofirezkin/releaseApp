import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {ILLogo} from '../../assets/illustration';
import {Button, Gap, Input} from '../../components/atoms';
import {useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {Loading} from '../../components/molecules';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        Fire.database()
          .ref('admin/')
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              setLoading(false);
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        const errorMessage = err.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: 'red',
          color: 'white',
        });
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      enabled={Platform.OS === 'ios' ? true : false}>
      <View style={{backgroundColor: '#223694', height: '65%'}}>
        <View
          style={{
            backgroundColor: '#F3F7FF',
            height: '100%',
            borderBottomEndRadius: 50,
            padding: 30,
          }}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai Monitoring</Text>
          <View style={styles.input}>
            <Input
              type="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={10} />
            <Input
              secureTextEntry
              type="Password"
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
            />
          </View>
        </View>
      </View>

      <View style={{backgroundColor: '#F3F7FF', height: '35%'}}>
        <View
          style={{
            backgroundColor: '#223694',
            height: '100%',
            borderTopLeftRadius: 50,
            paddingTop: 40,
          }}>
          <View style={{alignItems: 'center'}}>
            <Button title="Login" onPress={login} />
          </View>
        </View>
      </View>
      {loading && <Loading />}
    </KeyboardAvoidingView>
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
