import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Dashboard,
  GetStarted,
  Jadwal,
  Login,
  Lokasi,
  Monitoring,
  Sukses,
  Register,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ButtonNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <ButtonNavigator {...props} />}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Jadwal" component={Jadwal} />
      <Tab.Screen name="Lokasi" component={Lokasi} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sukses"
        component={Sukses}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Monitoring"
        component={Monitoring}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
