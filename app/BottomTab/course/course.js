import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Course = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Page</Text>
    </View>
  );
};

export default Course;

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
