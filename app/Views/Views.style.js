import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBackground: {
    width: 120,
    height: 120,
    backgroundColor: '#333',
    borderRadius: 120 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  btn: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.43,
    textTransform: 'uppercase',
  },
});

export default styles;
