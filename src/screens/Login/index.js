import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import style from './style';

const Login = () => {
  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
