import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import style from './style';
import {route} from '../../lib/utils/constants';

const LoginOrRegister = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(route.CHOOSESERVICE)}
        style={style.btn}>
        <Text style={style.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(route.REGISTER)}
        style={style.btn}>
        <Text style={style.text}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginOrRegister;
