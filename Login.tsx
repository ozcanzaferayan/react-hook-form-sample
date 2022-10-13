import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const handleLogin = async () => {
    //await AsyncStorage.removeItem('ACCESS_TOKEN');
    await AsyncStorage.setItem('ACCESS_TOKEN', '12345');
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView>
      <TextInput style={styles.textInput} />
      <Button title="Submit" onPress={handleLogin} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default Login;
