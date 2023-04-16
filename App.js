import React from 'react';
import {Button, Texts} from './app/reusable';
import {View} from 'react-native';
import {
  PrimaryBlue,
  PrimaryMagenta,
  PrimaryYellow,
  white,
} from './app/reusable/colors/Colors';

const App = () => {
  return (
    <View style={{paddingHorizontal: 8, paddingVertical: 8}}>
      <View style={{marginBottom: 10}}>
        <Button
          backgroundColor={PrimaryMagenta}
          color="white"
          size="sm"
          type="outline">
          Welcome Zeeshan
        </Button>
      </View>

      <View style={{marginBottom: 10}}>
        <Button
          backgroundColor={PrimaryBlue}
          color="white"
          size="md"
          type="outline">
          Welcome Zeeshan
        </Button>
      </View>

      <View style={{marginBottom: 10}}>
        <Button
          backgroundColor={PrimaryYellow}
          color="white"
          size="lg"
          type="outline">
          Welcome Zeeshan
        </Button>
      </View>

      <View style={{marginBottom: 10}}>
        <Button backgroundColor={PrimaryMagenta} color="white" size="sm">
          Welcome Zeeshan
        </Button>
      </View>

      <View style={{marginBottom: 10}}>
        <Button backgroundColor={PrimaryBlue} color="white" size="md">
          Welcome Zeeshan
        </Button>
      </View>

      <Button backgroundColor={PrimaryYellow} color="white" size="lg">
        Welcome Zeeshan
      </Button>
    </View>
  );
};

export default App;
