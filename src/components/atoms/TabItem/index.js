import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ICHomeActive,
  ICHomeInactive,
  ICJadwalActive,
  ICJadwalInactive,
  IClokasiActive,
  ICLokasiInactive,
} from '../../../assets/icon';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <ICHomeActive /> : <ICHomeInactive />;
    }
    if (title === 'Jadwal') {
      return active ? <ICJadwalActive /> : <ICJadwalInactive />;
    }
    if (title === 'Lokasi') {
      return active ? <IClokasiActive /> : <ICLokasiInactive />;
    }
    return <ICHomeActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 14,
    fontFamily: 'Assistant-Regular',
    color: active ? '#F86D70' : 'white',
    marginTop: 4,
  }),
});
