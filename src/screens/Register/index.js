import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import React, {useLayoutEffect, useState} from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import themeStyle from '../../assets/styles/theme.style';
import {route} from '../../lib/utils/constants';

const Register = () => {
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
  const handleRegister = async () => {
    if (email.length && password.length) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(val => {
          navigation.replace(route.CHOOSESERVICE);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('The email address is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            Alert.alert('The email address is invalid!');
          } else {
            Alert.alert(error.toString());
          }
        });
    } else {
      Alert.alert('Fill all fields');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={style.mainContainer}>
          <Text style={style.heading}>Register</Text>

          <View style={style.mainContainer2}>
            <View style={{marginBottom: '2%', paddingTop: '30%'}}>
              <TextInput
                mode="flat"
                label="Email"
                placeholder="Type your email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>

            <TextInput
              mode="flat"
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
          <View style={style.btnContainer}>
            <TouchableOpacity
              onPress={() => handleRegister()}
              style={style.btn}>
              <Text style={style.text}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;
