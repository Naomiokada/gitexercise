import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from '../styles/AboutStyles';


function About(){
  return (
   <View style={styles.aboutPage}>

        <View>
            <Text style={styles.header}>About Us</Text>
        </View>


       <View style={styles.profile}>
            <Image
            style={styles.profileimg}
            source={require('../imgs/elias.jpg')}
            />
            <Text style={styles.name}>Elias Tayag</Text>
            <Text>Elias likes long romantic walks on the beach.</Text>
        </View>


        <View style={styles.profile}>
            <Image
            style={styles.profileimg}
            source={require('../imgs/irvin.jpg')}
            />
            <Text style={styles.name}>Irvin Alcira</Text>
            <Text>Irvin is a fun guy and is also a passionate lover.</Text>
        </View>

        <View style={styles.profile}>
            <Image
            style={styles.profileimg}
            source={require('../imgs/naomi.jpg')}
            />
            <Text style={styles.name}>Naomi Okada</Text>
            <Text>Coding is a bowl of soup and Naomi is a fork.</Text>
        </View>

   </View>  
  )
};

export default About;
