import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Input = ({type, value, onChangeText, secureTextEntry}) => {
  const [border, setBorder] = useState('#C7D9ED');
  const onFocusForm = () => {
    setBorder('#2B3695');
  };
  const onBlurForm = () => {
    setBorder('#C7D9ED');
  };
  return (
    <View>
      <Text style={styles.label}>{type}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
  }),
  label: {
    marginBottom: 7,
    fontSize: 16,
    color: '#7D8797',
    fontFamily: 'Assistant-Regular',
  },
});
