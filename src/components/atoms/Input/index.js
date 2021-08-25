import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Picker} from '@react-native-community/picker';
const Input = ({
  label,
  type,
  value,
  onChangeText,
  select,
  selectItem,
  onValueChange,
  secureTextEntry,
}) => {
  const [border, setBorder] = useState('#C7D9ED');
  const onFocusForm = () => {
    setBorder('#2B3695');
  };
  const onBlurForm = () => {
    setBorder('#C7D9ED');
  };

  if (select) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker selectedValue={value} onValueChange={onValueChange}>
            {selectItem.map((item) => {
              return (
                <Picker.Item
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.label}>{type}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
    backgroundColor: 'white',
  }),
  label: {
    marginBottom: 7,
    fontSize: 16,
    color: '#7D8797',
    fontFamily: 'Assistant-Regular',
  },

  picker: {
    backgroundColor: 'white',
    borderColor: '#C7D9ED',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 4,
  },
});
