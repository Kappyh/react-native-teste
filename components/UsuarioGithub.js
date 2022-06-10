import React from "react";
import {Button , Text, View, TextInput, StyleSheet } from "react-native";

class UsuarioGithub extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dados: {},
            usuario: 'octocat'
        }

        this.fetchDados = this.fetchDados.bind(this);
        this.formataDadosUsuario = this.formataDadosUsuario.bind(this);
    }

    componentDidMount() {
        this.fetchDados();
    }

    formataDadosUsuario(){
        if(this.state.dados.name !== undefined){
            const { name, public_repos, followers } = this.state.dados;
            return (
                <>
                    <Text style={estilos.font30}>
                        Dados do usuário
                    </Text>
                    <Text>
                        Nome: {name}
                    </Text>
                    <Text>
                        Repositórios: {public_repos}
                    </Text>
                    <Text>
                        Seguidores: {followers}
                    </Text>
                </>
            )
        }
        return (
            <Text style={estilos.font30}> Este usuário não existe!</Text>
        )
    }

    fetchDados(){
        fetch(`https://api.github.com/users/${this.state.usuario}`)
            .then(response=>response.json())
            .then(json=> this.setState({dados:json}))
            .catch(err=> this.setState({dados:err}))
    }

    render() {

        return(
            <View>
                {this.formataDadosUsuario()}
                <View>
                    <TextInput
                        style={estilos.input}
                        onChangeText={usuario => {this.setState({usuario})}}
                        value={this.state.usuario}
                    />
                </View>
                <View>
                    <Button
                    onPress={this.fetchDados}
                    title={'Buscar dados'}
                    accessibilityLabel={"busque os dados do usuário no github"}
                    />
                </View>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    input:{
        height: 50,
        width: 300,
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        padding: 5,
    },
    font30:{
        fontSize: 30
    }
})

export default UsuarioGithub;