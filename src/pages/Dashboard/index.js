import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ILGrafik} from '../../assets/illustration';
import {GrafikData, Gap, LokasiTandon} from '../../components/atoms';
import Header from '../../components/molecules/Header';
import {Fire} from '../../config';
const Dashboard = ({navigation}) => {
  const [dataTandonKotor, setDataTandonKotor] = useState([]);
  const [dataTandonBersih, setDataTandonBersih] = useState([]);

  useEffect(() => {
    getDataTandonKotor();
    getDataTandonBersih();
  }, []);

  const getDataTandonBersih = () => {
    const ref = Fire.database()
      .ref('dataTandon/')
      .orderByChild('peringatan')
      .equalTo('0');
    const listener = ref.on('value', (snapshot) => {
      const fetchedTasks = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        fetchedTasks.push({id: key, ...data});
      });
      setDataTandonBersih(fetchedTasks);
    });
    return () => ref.off('value', listener);
    // Fire.database()
    //   .ref('dataTandon/')
    //   .orderByChild('peringatan')
    //   .equalTo(0)
    //   .once('value')
    //   .then((res) => {
    //     if (res.val()) {
    //       const oldData = res.val();
    //       console.log('data', oldData);
    //       const data = [];
    //       Object.keys(oldData).map((key) => {
    //         data.push({
    //           id: key,
    //           data: oldData[key],
    //         });
    //       });
    //       setDataTandonBersih(data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const getDataTandonKotor = () => {
    const ref = Fire.database()
      .ref('dataTandon/')
      .orderByChild('peringatan')
      .equalTo('2');
    const listener = ref.on('value', (snapshot) => {
      const fetchedTasks = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        fetchedTasks.push({id: key, ...data});
      });
      setDataTandonKotor(fetchedTasks);
    });
    return () => ref.off('value', listener);
  };

  const jumlahDataBersih = dataTandonBersih.length;
  const jumlahDataKotor = dataTandonKotor.length;

  return (
    <View style={styles.container}>
      <Header type="Dashboard" />
      <View style={styles.grafik}>
        <ILGrafik />
      </View>
      <Text style={styles.title}>Laporan Monitoring Minggu ini : </Text>
      <View style={styles.cardGrafik}>
        <GrafikData status="DIBERSIHKAN" data={jumlahDataBersih} />
        <GrafikData status="KOTOR" data={jumlahDataKotor} />
      </View>
      <Text style={styles.desc}>Lokasi Tandon Kotor :</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View>
            <View>
              {jumlahDataKotor === 0 && (
                <View>
                  <Text>Tidak Ada Tandon Kotor</Text>
                </View>
              )}
              {jumlahDataKotor > 0 &&
                dataTandonKotor.map((data) => {
                  return (
                    <LokasiTandon
                      key={data.id}
                      data={data}
                      peringatan={data.peringatan}
                      onPress={() => navigation.navigate('Monitoring', data)}
                    />
                  );
                })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FF',
    flex: 1,
  },
  grafik: {
    marginTop: 17,
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 17,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    paddingHorizontal: 17,
    marginTop: 17,
  },
  cardGrafik: {
    marginTop: 13,
    flexDirection: 'row',
    marginBottom: 17,
    marginHorizontal: 17,
    justifyContent: 'space-between',
  },
  desc: {
    fontSize: 16,
    fontFamily: 'Assistant-SemiBold',
    marginBottom: 10,
    paddingHorizontal: 17,
  },
  textAll: {
    fontSize: 15,
    fontFamily: 'Assistant-Regular',
    color: '#6C7098',
    marginBottom: 26,
  },
});
