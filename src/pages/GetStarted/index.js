import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILHello, ILLogo} from '../../assets/illustration';
import {Button, Gap} from '../../components/atoms';

const GetStarted = ({navigation}) => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.wrapper}>
          <ILLogo style={styles.hello} />
          <View style={styles.forCenter}>
            <ILHello />
          </View>
        </View>
      </View>
      <View style={styles.pageText}>
        <View style={styles.pageTextTwo}>
          <View style={styles.forCenter}>
            <Text style={styles.desc}>let's connect</Text>
            <Text style={styles.desc2}>with tandon monitoring</Text>
            <Text style={styles.desc3}>
              monitoring application at each location
            </Text>
          </View>
          <View>
            <Button
              title="Let's Start"
              onPress={() => navigation.replace('Login')}
            />
            <Gap height={10} />
          </View>
        </View>
      </View>
    </>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {backgroundColor: '#2B3695', height: '50%'},
  forCenter: {alignItems: 'center'},
  wrapper: {
    backgroundColor: '#F3F7FF',
    borderBottomEndRadius: 100,
    height: '100%',
    padding: 20,
  },
  pageText: {backgroundColor: '#F3F7FF', height: '50%'},
  pageTextTwo: {
    backgroundColor: '#2B3695',
    borderTopLeftRadius: 100,
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  desc: {
    color: 'white',
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
