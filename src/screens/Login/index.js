import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import themeStyle from '../../assets/styles/theme.style';
import {route} from '../../lib/utils/constants';

const Login = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MaterialCommunityIcons
          onPress={() => navigation.goBack()}
          name="keyboard-backspace"
          size={30}
          backgroundColor={themeStyle.COLOR_BLACK}
          style={style.listIcon}
        />
      ),
      headerTitle: () => <Text style={style.headerTite}>{''}</Text>,
    });
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(true);
  const handleClick = () => {};

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <Text style={style.heading}>Login</Text>

        <View style={style.mainContainer2}>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Type your email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Type your password"
            value={password}
            secureTextEntry={showPass}
            right={
              <TextInput.Icon
                onPress={() => setShowPass(!showPass)}
                name="eye"
              />
            }
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <View style={style.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(route.SELECTPROVIDER)}
          style={style.btn}>
          <Text style={style.text}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
