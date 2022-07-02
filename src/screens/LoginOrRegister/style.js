import {StyleSheet} from 'react-native';
import themeStyle from '../../assets/styles/theme.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '50%',
  },
  btn: {
    backgroundColor: 'lightgreen',
    height: 70,
    width: '80%',
    borderRadius: 40,
    alignSelf: 'center',
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  text: {
    fontFamily: themeStyle.FONT_REGULAR,
    color: themeStyle.PRIMARY_BACKGROUND_COLOR,
  },
});
