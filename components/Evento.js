import React from "react";
import {StatusBar, StyleSheet, Text, TextInput, View} from "react-native";

class Evento extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.alteraInput = this.alteraInput.bind(this)
    }

    alteraInput(input){
        this.setState({input})
    }

    render() {
        return (
            <View>
                <TextInput style={estilos.entryText} value={this.state.input}
                onChangeText={this.alteraInput}></TextInput>
                <Text style={estilos.font30}>{this.state.input}</Text>
            </View>
        );
    }

}

const estilos = StyleSheet.create({
    entryText:{
        height: 50,
        width: 300,
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: StatusBar.currentHeight + 5,
        marginLeft: 2
    },
    font30:{
        fontSize: 30,
        color: 'black',
    }
})

export default Evento;