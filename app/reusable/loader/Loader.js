import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loader = ({size, color, ...rest}) => {
  return <ActivityIndicator size={size} color={color} {...rest} />;
};

export default Loader;
