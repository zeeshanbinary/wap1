import React, {useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const About = ({route, navigation}) => {
  const {name, email, password, mobile, address} = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Text>{name}</Text>,
    });
  }, [name]);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.titleName}>Name:</Text>
        <Text style={styles.titleName}>{name}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.titleName}>Email:</Text>
        <Text style={styles.titleName}>{email}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.titleName}>Password:</Text>
        <Text style={styles.titleName}>{password}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.titleName}>Mobile:</Text>
        <Text style={styles.titleName}>{mobile}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.titleName}>Address:</Text>
        <Text style={styles.titleName}>{address}</Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#fff',
  },
  subContainer: {
    flexDirection: 'row',
  },
  titleName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    marginRight: 20,
  },
});
