import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Email = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email Page</Text>
    </View>
  );
};

export default Email;

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
