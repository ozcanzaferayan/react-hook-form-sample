/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const schema = yup
    .object({
      firstName: yup.string().required("First name can't be empty"),
      age: yup
        .number()
        .typeError('Sayı giriniz')
        .positive('Pozifif olmalı')
        .integer('Tam sayı olmalı')
        .required(),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm({
    defaultValues: {
      firstName: '',
      age: 0,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);
  const handleChange = (value, onChange) => {
    console.log(value);
    if (value.length === 11) {
      fetch('https://jsonplaceholder.typicode.com/users').then(response =>
        response.json().then(data => {
          setError('firstName', {
            type: 'manual',
            message: 'TC kimlik numarası sistemde kayıtlı değil',
          });
        }),
      );
    }
    onChange(value);
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 11,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              maxLength={11}
              onChangeText={value => handleChange(value, onChange)}
              value={value}
            />
          )}
          name="firstName"
        />

        {errors.firstName && <Text>{errors.firstName.message}</Text>}
        <Controller
          control={control}
          rules={{
            required: 'Zorunlu alan',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'invalid email address',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value.toString()}
            />
          )}
          name="age"
        />
        {console.log(errors)}
        {errors.age && <Text>{errors.age.message}</Text>}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default App;
