import React from 'react';
import {View, Text} from 'react-native'
import styles from "./styles/AppStyles";
import Main from "./comps/Main";

const App = () => {
  return (
    <View style={styles.app}>
      <Text>Welcome to the Site!</Text>
      <Main />
    </View>
  );
};

export default App;
