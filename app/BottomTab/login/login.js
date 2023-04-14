import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

const Login = () => {
  return (
    <WebView source={{uri: 'https://wapinstitute.com/portal/classroom'}} />
  );
};

export default Login;

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
