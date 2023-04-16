import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Texts from '../Texts/Texts';
import { PrimaryBlue } from '../colors/Colors';

const Button = ({children, backgroundColor=PrimaryBlue, color="white", size, type}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: type === 'outline' ? null : backgroundColor,
          borderWidth: type === 'outline' ? 1 : null,
          borderColor: type === 'outline' ? backgroundColor : null,
          paddingVertical:
            (size === 'sm' && 6) ||
            (size === 'md' && 10) ||
            (size === 'lg' && 12) ||
            10,
          paddingHorizontal:
            (size === 'sm' && 12) ||
            (size === 'md' && 16) ||
            (size === 'lg' && 18) ||
            16,
          alignItems: 'center',
          borderRadius: 4,
        }}>
        <Texts
          size={size}
          style={{color: type === 'outline' ? backgroundColor : color}}>
          {children}
        </Texts>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
