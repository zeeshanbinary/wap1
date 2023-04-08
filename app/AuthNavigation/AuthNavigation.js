import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home/Home';
import About from '../About/About';

const Container = NavigationContainer;
const {Navigator, Screen} = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Container>
      <Navigator>
        <Screen name="Home" component={Home} options={{headerShown: false}} />
        <Screen name='About' component={About} />
      </Navigator>
    </Container>
  );
};

export default AuthNavigation;
