import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Email from '../Email/Email';
import Notification from '../Notification/Notification';

const Container = NavigationContainer;
const Stack = createNativeStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;


const toolbar = [
  {
    id: 1,
    navigation: 'Home',
    image: require('../assets/icon/home.png'),
  },
  {
    id: 2,
    navigation: 'Email',
    image: require('../assets/icon/email.png'),
  },
  {
    id: 3,
    navigation: 'Notification',
    image: require('../assets/icon/bell.png'),
  },
];

const headerLeft = navigation => {
  return (
    <View style={styles.leftContainer}>
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={() => navigation.goBack('Home')}>
          <Image
            source={require('../assets/icon/arrow-left.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
      <Image
        source={require('../assets/logo.jpg')}
        style={styles.logo}
        resizeMode="cover"
      />
    </View>
  );
};

const headerRight = navigation => {
  return (
    <View style={styles.rightContainer}>
      {toolbar.map(item => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate(item.navigation)}>
            <Image source={item.image} style={styles.icon} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const Navigations = () => {
  const option = navigation => ({
    title: null,
    headerLeft: () => headerLeft(navigation),
    headerRight: () => headerRight(navigation),
  });
  return (
    <Container>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={({navigation}) => option(navigation)}
        />
        <Screen
          name="About"
          component={About}
          options={({navigation}) => option(navigation)}
        />

        <Screen
          name="Email"
          component={Email}
          options={({navigation}) => option(navigation)}
        />

        <Screen
          name="Notification"
          component={Notification}
          options={({navigation}) => option(navigation)}
        />
      </Navigator>
    </Container>
  );
};

export default Navigations;

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 35,
    height: 35,
    borderRadius: 5,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
