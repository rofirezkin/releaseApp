import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICArrowBack} from '../../../assets/icon';

const Arrow = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ICArrowBack style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default Arrow;

const styles = StyleSheet.create({
  arrow: {},
});
