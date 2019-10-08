import React from 'react';

import {
  View,
  Text,
} from 'react-native';
import About from './comps/About';
import Contacts from './comps/Contacts';

function App(){
  return (
    <View style={styles.app}>
    
      <Text>Welcome to the Site!</Text>
      <Main />

      <About />
      <Contacts/>
      
    </View>

  )
};

export default App;
 