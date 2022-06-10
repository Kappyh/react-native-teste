import React from "react";
import { View } from "react-native";

class DimensoesFixas extends React.Component{
    render() {
        return(
            <View style={{width: '100%', height:'100%', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue', flexGrow: 1}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue', flexGrow: 2}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
            </View>
        )
    }
}

export default DimensoesFixas;