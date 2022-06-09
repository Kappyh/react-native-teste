import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import Estilos from '../estilos/Estilos';

export default function OlaMundo(props) {
    return(
        <View style={Estilos.container}>
            <Text>Olá</Text>
            <Text style={estilos.texto}>{props.nome}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    texto:{
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,
    }
})