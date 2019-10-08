import React, {useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import Logo from '../imgs/dog.jpg';

function Main(){
    const [mainText, setMainText] = useState("");
    const [mainStyle, setMainStyle] = useState({
 
    });
    const [textSize, setTextSize] = useState(12);

    return (
        <View style={mainStyle}>
    
          <Image
            style={{width:200, 
                marginTop:30,
                height:200, 
                justifyContent:"center", 
                alignItems:"center", 
                alignContent:"center",
                marginLeft:90
            }}
            source={require('../imgs/dog.jpg')}
            />

            <Text style={{justifyContent:"center", textAlign:"center",
        paddingTop:20}}>Welcome to our site!</Text>

        </View>

    );
}

export default Main;