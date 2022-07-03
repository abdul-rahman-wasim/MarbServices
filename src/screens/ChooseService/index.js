import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import themeStyle from '../../assets/styles/theme.style';
import style from './style';

const ChooseService = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Image
          source={require('../../assets/img/menu.png')}
          style={style.headerLeft}
        />
      ),
      headerTitle: () => <Text style={style.headerTite}>{'MECHANOX'}</Text>,
    });
  });
  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <Text style={style.heading}>Choose a Service</Text>
      </View>
      <View style={style.btnContainer}>
        <TouchableOpacity style={style.btn}>
          <Text style={style.text}>See Available Providers</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChooseService;
