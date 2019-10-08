/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import About from './comps/About';
import Contacts from './comps/Contacts';

function App(){
  return (
    <View>

      <About />
      <Contacts/>
      
    </View>

  )
};

export default App;
 