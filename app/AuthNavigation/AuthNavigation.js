import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home/Home';

const Container = NavigationContainer;
const {Navigator, Screen} = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Container>
      <Navigator>
        <Screen name="Home" component={Home} options={{headerShown: false}} />
      </Navigator>
    </Container>
  );
};

export default AuthNavigation;
