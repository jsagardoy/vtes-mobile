import Crypt from './Crypt';
import Home from './Home';
import Library from './Library';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Crypt' component={Crypt} />
        <Stack.Screen name='Library' component={Library} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
