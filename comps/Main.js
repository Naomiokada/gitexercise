import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Logo from './imgs/dog.JPG';

function Main(){
    const [mainText, setMainText] = useState("");
    const [mainStyle, setMainStyle] = useState({
        backgroundColor:"#C9D5D4"
    });
    const [textSize, setTextSize] = useState(12);

    return (
        <View style={mainStyle}>
            return <img src={Logo} alt="Logo" />;
        </View>

    )
}

export default Main;