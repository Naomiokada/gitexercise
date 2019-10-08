import React from 'react';

import {
  View,
  Text,
  ScrollView
} from 'react-native';
import About from './comps/About';
import Contacts from './comps/Contacts';
import Main from './comps/Main';


function App(){
  return (
    <ScrollView>
      <Main />

      <About />
      <Contacts/>
      
    </ScrollView>

  )
};

export default App;
 