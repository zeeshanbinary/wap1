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
  tabBarInactiveTintColor:'grey',
  tabBarActiveTintColor:'pink',
  tabBarButton: (props) => <TouchableOpacity {...props} />,
  tabBarActiveBackgroundColor:'grey',
  tabBarInactiveBackgroundColor:'#f3f3f3',
  tabBarHideOnKeyboard:true
});

const Layout = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Homes" component={Homes} options={{headerShown: false}} />
      <Screen name="Course" component={Course} options={{headerShown: false}} />
      <Screen name="Login" component={Login} options={{headerShown: false}} />
      <Screen name="Youtube" component={Youtube} />
    </Navigator>
  );
};

export default Layout;
