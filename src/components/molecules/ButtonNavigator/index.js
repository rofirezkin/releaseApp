import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TabItem} from '../../atoms';

const ButtonNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabItem
              key={index}
              title={label}
              active={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ButtonNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 53,
    paddingVertical: 12,
    backgroundColor: '#2B3693',
    borderTopLeftRadius: 50,
  },
  wrapper: {
    backgroundColor: '#F3F7FF',
  },
});
