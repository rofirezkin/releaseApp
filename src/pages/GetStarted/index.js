import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILHello, ILLogo} from '../../assets/illustration';
import {Button, Gap} from '../../components/atoms';

const GetStarted = ({navigation}) => {
  return (
    <View styles={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <View style={styles.background}>
            <ILLogo style={styles.logo} />
            <ILHello style={styles.hello} />
          </View>
        </View>
        <View style={styles.wrapper2}>
          <View style={styles.wraps}>
            <View style={styles.content}>
              <Text style={styles.desc}>let's connect</Text>
              <Text style={styles.desc2}>with tandon monitoring</Text>
              <Text style={styles.desc3}>
                monitoring application at each location
              </Text>
              <Button
                title="Let's Start"
                onPress={() => navigation.navigate('Login')}
              />
              <Gap height={15} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  background: {
    height: 330,
    alignItems: 'center',
    backgroundColor: '#F3F7FF',
    borderBottomRightRadius: 100,
  },
  wrapper: {
    backgroundColor: '#F3F7FF',
  },
  wrapper2: {
    backgroundColor: '#F3F7FF',
  },
  page: {
    backgroundColor: '#2B3695',
  },
  logo: {
    marginTop: 32,
    marginLeft: -280,
  },
  content: {
    backgroundColor: '#2B3695',
    borderTopLeftRadius: 100,
    alignItems: 'center',
    height: '100%',
  },
  desc: {
    color: 'white',
    marginTop: 45,
    fontSize: 26,
    fontWeight: '800',
    fontFamily: 'Assistant-Bold',
  },
  desc2: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'Assistant-Bold',
  },
  desc3: {
    marginTop: 16,
    color: 'white',
    fontSize: 15,
    marginBottom: 40,
    fontFamily: 'Assistant-Regular',
  },
});
