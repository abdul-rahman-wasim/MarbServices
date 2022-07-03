import {StyleSheet} from 'react-native';
import themeStyle from '../../assets/styles/theme.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyle.COLOR_BLACK,
  },
  heading: {
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 35,
    color: themeStyle.PRIMARY_BACKGROUND_COLOR,
    alignSelf: 'center',
  },
  heading2: {
    fontFamily: themeStyle.FONT_REGULAR,
    fontSize: 18,
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
  mainContainer: {marginTop: '5%', marginHorizontal: '5%'},
  cardContainer: {
    height: 110,
    width: '100%',
    backgroundColor: themeStyle.PRIMARY_BACKGROUND_COLOR,
    flexDirection: 'row',
  },
  imgContainer: {
    height: '100%',
    width: '35%',
  },
  imgStyle: {height: '100%', width: '100%'},
  textContainer: {
    height: '100%',
    width: '65%',
    padding: '2%',
  },
  cardHeading: {
    color: themeStyle.COLOR_BLACK,
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 20,
  },
  cardDesc: {
    color: themeStyle.COLOR_BLACK,
    fontFamily: themeStyle.FONT_LIGHT,
    fontSize: 10,
  },
  cardReview: {
    color: themeStyle.COLOR_BLACK,
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 12,
    marginRight: '1%',
  },
  cardReview2: {
    color: themeStyle.COLOR_BLACK,
    fontFamily: themeStyle.FONT_LIGHT,
    fontSize: 12,
    marginLeft: '1%',
  },
  cardPrice: {
    color: themeStyle.COLOR_BLACK,
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 12,
  },
  reviewCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
