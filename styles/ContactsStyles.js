import {StyleSheet} from 'react-native';

var styles = StyleSheet.create ({
    header: {
        justifyContent:"center",
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 25,
        paddingBottom: 10,
        paddingTop: 50,
        color:"#1f7a8c"
    },
    name: {
        fontWeight:"bold",
        fontSize:20,
        paddingBottom:10
    },

    contactBox: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center"
    },

    infoRow:{ 
        flexDirection:"row"
    },

    infoBolded:{ 
        fontWeight:"bold",
    },
});

export default styles;