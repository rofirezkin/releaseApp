import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILMap} from '../../assets/illustration';
import {BtnSend, Gap, LokasiTandon} from '../../components/atoms';
import Header from '../../components/molecules/Header';
import {Fire} from '../../config';

const Lokasi = ({navigation}) => {
  const [dataTandon, setdataTandon] = useState([]);

  useEffect(() => {
    const ref = Fire.database().ref('dataTandon/');
    const listener = ref.on('value', (snapshot) => {
      const fetchedTasks = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        fetchedTasks.push({id: key, ...data});
      });
      setdataTandon(fetchedTasks);
    });
    return () => ref.off('value', listener);
  }, []);

  // const getLokasiSeluruh = () => {
  //   Fire.database()
  //     .ref('dataTandon/')
  //     .once('value')
  //     .then((res) => {
  //       if (res.val()) {
  //         const oldData = res.val();
  //         const data = [];
  //         Object.keys(oldData).map((key) => {
  //           data.push({
  //             id: key,
  //             data: oldData[key],
  //           });
  //         });
  //         setdataTandon(data);
  //       }
  //     })
  //     .catch((err) => {
  //       showMessage(err.message);
  //     });
  // };

  return (
    <View style={styles.container}>
      <Header type="Lokasi" />
      <View style={styles.image}>
        <ILMap />
      </View>

      <View style={styles.wrapper}>
        <Gap height={16} />
        <Text style={styles.title}>Lokasi Monitoring : </Text>
        <Gap height={10} />
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View>
            {dataTandon.map((data) => {
              return (
                <LokasiTandon
                  key={data.id}
                  data={data}
                  onPress={() => navigation.navigate('Monitoring', data)}
                />
              );
            })}
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
    paddingHorizontal: 17,
  },
  wrapper: {
    paddingHorizontal: 19,
  },
});
