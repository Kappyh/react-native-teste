import React from "react";
import {StyleSheet, SafeAreaView, Text} from "react-native";

export default class ChecaNumero extends React.Component{

    validaParOuImpar(){
        return  this.props.numero % 2 === 0?
            <Text style={estilos.texto}>O número {this.props.numero} é par</Text>:
            <Text style={estilos.texto}>O número {this.props.numero} é impar</Text>
    }

    render() {
        return(
            <SafeAreaView style={estilos.container}>
                {
                  this.validaParOuImpar()
                }
            </SafeAreaView>
        );
    }
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20,
        color: '#000',
        borderColor: 'red',
        borderWidth: 1
    }
})