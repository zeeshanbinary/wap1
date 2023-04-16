import React from 'react';
import { Texts } from './app/reusable';
import { PrimaryBlue, PrimaryMagenta, PrimaryYellow } from './app/reusable/colors/Colors';

const App = () => {
  return (
    <>
      <Texts>Hello Zeeshan Ansari</Texts>
      <Texts size="xs" style={{color:PrimaryBlue}}>Hello Zeeshan Ansari 1</Texts>
      <Texts size="sm" style={{color:PrimaryMagenta}}>Hello Zeeshan Ansari 2</Texts>
      <Texts size="md" style={{color:PrimaryYellow}}>Hello Zeeshan Ansari 3</Texts>
      <Texts size="lg">Hello Zeeshan Ansari 4</Texts>
      <Texts size="xl">Hello Zeeshan Ansari 5</Texts>
      <Texts size="xxl" style={{color: 'red'}}>Hello Zeeshan Ansari 6</Texts>
      <Texts size="xxxl">Hello Zeeshan Ansari 7</Texts>
     
    </>
  );
};

export default App;
