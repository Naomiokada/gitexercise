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


import styles from '../styles/ContactsStyles';


function Contacts(){
  return (
    <View style={styles.ContactContainer}>
        <Text style={styles.header}>Contact Information</Text>

        <View style={styles.contactBox}>

                {/* Name of Person */}
                <Text style={styles.name}>Irvin Alcira</Text>

                {/* Phone Number */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoBolded}>Phone: </Text>
                    <Text style={styles.info}>(604) 780-8056</Text>
                </View>

                {/* Address */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoBolded}>Address: </Text>
                    <Text style={styles.info}>6731 185 Street</Text>
                </View>

        </View>


        {/* Irvin Contact Info */}
        <View style={styles.contactBox}>

                {/* Name */}
                <Text style={styles.name}>Naomi Okada</Text>

                {/* Phone Number */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoBolded}>Phone: </Text>
                    <Text style={styles.info}>(604) 689-9853</Text>
                </View>

                {/* Address */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoBolded}>Address: </Text>
                    <Text style={styles.info}>18281 66 Avenue</Text>
                </View>
                
        </View>        
        
        {/* Naomi Contact Info */}
        <View style={styles.contactBox}>

                {/* Name */}
                <Text style={styles.name}>Naomi Okada</Text>

                {/* Phone Number */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoBolded}>Phone: </Text>
                    <Text style={styles.info}>(604) 689-9853</Text>
                </View>

                {/* Address */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoBolded}>Address: </Text>
                    <Text style={styles.info}>18281 66 Avenue</Text>
                </View>
                
        </View>

        {/* Elias Contact Info */}
        <View style={styles.contactBox}>

                {/* Name */}
                <Text style={styles.name}>Elias Tayag</Text>

                {/* Phone Number */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoBolded}>Phone: </Text>
                    <Text style={styles.info}>(604) 862-4013</Text>
                </View>

                {/* Address */}
                <View style={styles.infoRow}>
                    <Text style={styles.infoBolded}>Address: </Text>
                    <Text style={styles.info}>19477 72A Avenue</Text>
                </View>
                
        </View>

       
    </View>
  )
};


export default Contacts;
 