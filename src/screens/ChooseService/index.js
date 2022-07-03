import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import themeStyle from '../../assets/styles/theme.style';
import {route} from '../../lib/utils/constants';

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
  const [expanded, setExpanded] = useState(false);
  const [listData, setListData] = useState([
    {name: 'AC Repair', selected: false},
    {name: 'Replacement', selected: false},
    {name: 'AC Check-up', selected: false},
  ]);
  const handlePress = () => setExpanded(!expanded);
  const handleClick = ind => {
    let temp = [];
    listData.map((val, index) => {
      if (ind == index) {
        temp.push({
          name: val.name,
          selected: val.selected ? false : true,
        });
      } else {
        temp.push({
          name: val.name,
          selected: false,
        });
      }
    });
    setListData(temp);
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        <Text style={style.heading}>Choose a Service</Text>

        <View style={style.mainContainer2}>
          <TouchableOpacity
            onPress={() => handlePress()}
            style={expanded ? style.listButton2 : style.listButton}>
            <View style={style.listContainer}>
              <MaterialCommunityIcons
                name="fan"
                size={30}
                backgroundColor={themeStyle.COLOR_BLACK}
                style={style.listIcon}
              />
              <Text style={style.listText}>AC Services</Text>
            </View>
          </TouchableOpacity>

          {expanded && (
            <View
              style={{
                backgroundColor: themeStyle.COLOR_GREY,
              }}>
              {listData.map((val, ind) => (
                <TouchableOpacity
                  onPress={() => handleClick(ind)}
                  style={val.selected ? style.bulletStyle2 : style.bulletStyle}>
                  <Text
                    style={val.selected ? style.bulletList2 : style.bulletList}>
                    {'\u2B24'}
                    {'  '}
                    {val.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TouchableOpacity style={style.listButton}>
            <View style={style.listContainer}>
              <MaterialCommunityIcons
                name="car-battery"
                size={30}
                backgroundColor={themeStyle.COLOR_BLACK}
                style={style.listIcon}
              />
              <Text style={style.listText}>Battery Services</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={style.listButton}>
            <View style={style.listContainer}>
              <MaterialCommunityIcons
                name="car-brake-alert"
                size={30}
                backgroundColor={themeStyle.COLOR_BLACK}
                style={style.listIcon}
              />
              <Text style={style.listText}>Brake Services</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(route.SELECTPROVIDER)}
          style={style.btn}>
          <Text style={style.text}>See Available Providers</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChooseService;
