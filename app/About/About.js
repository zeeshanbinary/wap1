import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Goto Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

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
  btn: {
    backgroundColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.43,
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
