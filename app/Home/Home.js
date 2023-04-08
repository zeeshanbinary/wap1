import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subheader}>
          <Image
            source={require('../assets/logo.jpg')}
            resizeMode="cover"
            style={styles.log}
          />
        </View>
      </View>
      <View style={styles.sign}>
        <Text style={styles.signTile}>User Sign</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile No"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={text => setMobile(text)}
          />
          <TextInput
            style={styles.textArea}
            placeholder="Enter Address"
            keyboardType="phone-pad"
            multiline={true}
            value={address}
            onChangeText={text => setAddress(text)}
          />
        </ScrollView>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Click Here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Powered By @zeeshanansari.com</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    height: 100,
    backgroundColor: '#c558fc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subheader: {
    height: 80,
    width: 80,
    backgroundColor: '#fff',
    borderRadius: 80 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sign: {
    marginHorizontal: 8,
  },
  signTile: {
    color: '#c558fc',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  log: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    minHeight: 38,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  btn: {
    backgroundColor: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    width: 150,
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
  footer: {
    backgroundColor: '#c558fc',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 120,
    marginBottom: 8,
  },
});
