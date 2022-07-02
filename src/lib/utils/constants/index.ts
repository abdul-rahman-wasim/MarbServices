import {Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const route = {
  LOGINORREGSITER: 'LoginOrRegister',
  LOGIN: 'Login',
  REGISTER: 'Register',
  CHOOSESERVICE: 'ChooseService',
  SELECTPROVIDER: 'SelectProvider',
};

export {route, SCREEN_HEIGHT, SCREEN_WIDTH};
