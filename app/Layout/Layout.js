import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homes from '../BottomTab/homes/homes';
import Course from '../BottomTab/course/course';
import Login from '../BottomTab/login/login';
import Youtube from '../BottomTab/youtube/youtube';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const {Navigator, Screen} = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    if (route.name === 'Homes') {
      return (
        <Icon
          name={focused ? 'home' : 'home-outline'}
          color={focused ? 'orange' : 'grey'}
        />
      );
    }
    if (route.name === 'Course') {
      return (
        <Icon
        name={focused ? 'book' : 'book-outline'}
        color={focused ? 'orange' : 'grey'}
      />
      );
    }
    if (route.name === 'Login') {
      return (
        <Icon
          name={focused ? 'log-in' : 'log-in-outline'}
          color={focused ? 'orange' : 'grey'}
        />
      );
    }
    if (route.name === 'Youtube') {
      return (
        <Icon
        name={focused ? 'logo-youtube' : 'logo-youtube'}
        color={focused ? 'orange' : 'grey'}
      />
      );
    }
  },
});

const Layout = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Homes" component={Homes} />
      <Screen name="Course" component={Course} />
      <Screen name="Login" component={Login} />
      <Screen name="Youtube" component={Youtube} />
    </Navigator>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
