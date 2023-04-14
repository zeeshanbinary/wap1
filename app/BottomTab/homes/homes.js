import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

const Homes = () => {
  return <WebView source={{uri: 'https://wapinstitute.com/'}} />;
};

export default Homes;

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
});
