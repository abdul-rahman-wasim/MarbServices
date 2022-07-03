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
  btnContainer: {flex: 0.2},
  mainContainer: {flex: 0.8},
  listButton: {
    backgroundColor: 'white',
    width: '100%',
    height: 45,
    justifyContent: 'center',
    marginVertical: '2%',
  },
  listButton2: {
    backgroundColor: 'white',
    width: '100%',
    height: 45,
    justifyContent: 'center',
  },
  listContainer: {flexDirection: 'row'},
  listIcon: {marginLeft: 5},
  listText: {
    color: themeStyle.COLOR_BLACK,
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 20,
    marginHorizontal: '2%',
  },
  mainContainer2: {marginTop: '5%', marginHorizontal: '5%'},
  bulletStyle: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: '8%',
  },
  bulletStyle2: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: '8%',
    backgroundColor: themeStyle.COLOR_BLUE,
  },
  bulletList: {
    color: themeStyle.COLOR_BLACK,
    fontFamily: themeStyle.FONT_REGULAR,
    marginHorizontal: '2%',
    fontSize: 15,
  },
  bulletList2: {
    color: themeStyle.PRIMARY_BACKGROUND_COLOR,
    fontFamily: themeStyle.FONT_REGULAR,
    marginHorizontal: '2%',
    fontSize: 15,
  },
});
