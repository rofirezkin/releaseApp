import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconAvatar} from '../../assets/icon';
import {Gap, Header, ListProfile, ProfileTandon} from '../../components';
import {Fire} from '../../config';

const Profile = ({navigation}) => {
  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'GetStarted'}],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.page}>
      <Header type="Profile" />
      <View style={styles.container}>
        <Gap height={20} />
        <ProfileTandon
          name="Admin"
          desc="Bagian Monitoring Data"
          photo={IconAvatar}
        />
        <Gap height={20} />
        <ListProfile
          text="Tambah Alat Tandon"
          onPress={() => navigation.navigate('FormTandon')}
        />
        <Gap height={20} />
        <ListProfile text="Panduan Aplikasi" />
        <Gap height={20} />
        <ListProfile text="Keluar Aplikasi" onPress={signOut} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F3F7FF',
    flex: 1,
  },
  container: {
    marginHorizontal: 18,
  },
});
