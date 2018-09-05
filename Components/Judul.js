import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
    render(){
        return (
            <Text style={salon.judul}
            >BIODATA</Text>

        )
    }
}

const salon = {
    judul:{
        color: '#fff',
        fontSize: 50,
        backgroundColor: '#000',
        textAlign: 'center'
    }
}

export default Judul; 