import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {route} from '../lib/utils/constants';
import {
  ChooseService,
  Login,
  LoginOrRegister,
  Register,
  SelectProvider,
} from '../screens';

const Stack = createStackNavigator();

export const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName={route.LOGINORREGSITER}>
      <Stack.Screen
        name={route.LOGINORREGSITER}
        component={LoginOrRegister}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={route.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={route.REGISTER}
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={route.CHOOSESERVICE} component={ChooseService} />
      <Stack.Screen name={route.SELECTPROVIDER} component={SelectProvider} />
    </Stack.Navigator>
  );
};
export default LoginOrRegister;
