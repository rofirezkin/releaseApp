import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({type}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B3695',
    marginHorizontal: 73,
    height: 67,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Assistant-SemiBold',
  },
});
