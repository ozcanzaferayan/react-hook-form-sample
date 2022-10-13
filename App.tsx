import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Home from './Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const isSignedIn = true;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSignedIn ? 'Home' : 'Login'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
