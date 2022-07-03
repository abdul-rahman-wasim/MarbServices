import {StyleSheet} from 'react-native';
import themeStyle from '../../assets/styles/theme.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyle.COLOR_BLACK,
  },
  btn: {
    backgroundColor: themeStyle.COLOR_GREEN,
    height: 50,
    width: '80%',
    borderRadius: 40,
    alignSelf: 'center',
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    // shadowColor: themeStyle.COLOR_GREEN,
    // shadowOpacity: 1,
    // shadowOffset: {width: 2, height: 2},
    // shadowRadius: 10,
    // elevation: 20,
  },
  text: {
    fontFamily: themeStyle.FONT_BOLD,
    color: themeStyle.PRIMARY_BACKGROUND_COLOR,
    fontSize: 20,
  },
  heading: {
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 35,
    color: themeStyle.PRIMARY_BACKGROUND_COLOR,
    alignSelf: 'center',
  },
  headerLeft: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  headerTite: {
    color: themeStyle.COLOR_BLACK,
    fontSize: 35,
    fontFamily: themeStyle.FONT_MEDIUM,
    marginLeft: 30,
  },
  btnContainer: {justifyContent: 'flex-end', marginTop: '5%'},
  mainContainer: {flex: 1},
  mainContainer2: {marginTop: '5%', marginHorizontal: '5%'},
});
