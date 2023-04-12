import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
    key: 1,
    image: require('../assets/welcome-screen/a.png'),
  },
  {
    key: 2,
    image: require('../assets/welcome-screen/b.png'),
  },
  {
    key: 3,
    image: require('../assets/welcome-screen/c.png'),
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const renderDoneButton = () => {
  return (
    <View style={styles.renderNext}>
      <Image source={require('../assets/icon/check.png')} style={styles.icon} />
    </View>
  );
};

const renderNextButton = () => {
  return (
    <View style={styles.renderNext}>
      <Image
        source={require('../assets/icon/right-arrow.png')}
        style={styles.icon}
      />
    </View>
  );
};

const renderSkipButton = () => {
  return (
    <View style={styles.renderNext}>
      <Image
        source={require('../assets/icon/fast-forward-button.png')}
        style={styles.icon}
      />
    </View>
  );
};
const Welcome = ({navigation}) => {
  return (
    <AppIntroSlider
      data={data}
      renderItem={renderItem}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderSkipButton={renderSkipButton}
      showSkipButton={true}
      onDone={() => navigation.navigate('Layout')}
      onSkip={() => navigation.navigate('Layout')}
    />
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  renderNext: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
