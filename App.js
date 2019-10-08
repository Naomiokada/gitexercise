import React from 'react';

import {
  View,
  Text,
} from 'react-native';
import About from './comps/About';
import Contacts from './comps/Contacts';
import Main from './comps/Main';

function App(){
  return (
    <View >
    
      <Text>Welcome to the Site!</Text>
      
      <Main />

      <About />
      <Contacts/>
      
    </View>

  )
};

export default App;
 