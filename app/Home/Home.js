import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('About')}>
        <Text style={styles.btnText}>Goto About Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

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
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 0.43,
    textTransform: 'uppercase',
  },
});
