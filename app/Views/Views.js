import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './Views.style';
const Views = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/splash.jpg')}
        style={styles.image}
        resizeMode="cover">
        <StatusBar backgroundColor={'#000'} hidden={show} animated={false} />
        <View style={styles.logoBackground}>
          <Image
            source={require('../assets/logo.jpg')}
            style={styles.logo}
            resizeMode="center"
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={1}
          onPress={() => setShow(!show)}>
          <Text style={styles.btnText}>Statusbar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Views;
