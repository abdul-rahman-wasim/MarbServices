import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import style from './style';
import themeStyle from '../../assets/styles/theme.style';

const dummyArray = [
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
];
const SelectProvider = () => {
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
  const renderCards = (item, index) => {
    return (
      <View style={style.cardContainer}>
        {/* Pic container */}
        <View style={style.imgContainer}>
          <Image
            resizeMode="cover"
            source={require('../../assets/img/avatar.jpg')}
            style={style.imgStyle}
          />
        </View>
        {/* Text Container */}
        <View style={style.textContainer}>
          <Text style={style.cardHeading}>Dohn Doe Mechanics</Text>
          <Text ellipsizeMode="tail" numberOfLines={3} style={style.cardDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Text>
          <View style={style.reviewCont}>
            <Text style={style.cardReview}>Reviews:</Text>
            <Entypo name="star" size={10} color={themeStyle.COLOR_YELLOW} />
            <Entypo name="star" size={10} color={themeStyle.COLOR_YELLOW} />
            <Entypo name="star" size={10} color={themeStyle.COLOR_YELLOW} />
            <Entypo name="star" size={10} color={themeStyle.COLOR_YELLOW} />
            <Entypo name="star" size={10} color={themeStyle.COLOR_YELLOW} />
            <Text style={style.cardReview2}> (126)</Text>
          </View>

          <Text style={style.cardPrice}>Estimated Cost: 142.00 USD</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.heading}>Available Providers</Text>
      <Text style={style.heading2}>For AC Replacement Services</Text>
      <FlatList
        contentContainerStyle={style.mainContainer}
        ItemSeparatorComponent={() => <View style={{height: 5}}></View>}
        data={dummyArray}
        renderItem={({item, index}) => renderCards(item, index)}
        ListFooterComponent={() => <View style={{height: 30}}></View>}
      />
    </SafeAreaView>
  );
};

export default SelectProvider;
