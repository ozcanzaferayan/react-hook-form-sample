import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    getSignedIn();
  }, []);

  const getSignedIn = async () => {
    const accessToken = await AsyncStorage.getItem('ACCESS_TOKEN');
    if (accessToken) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    }
  };

  return isSignedIn ? (
    <View>
      <Text>Home</Text>
    </View>
  ) : (
    <View>
      <Text>Not Signed In</Text>
    </View>
  );
};

export default Home;
