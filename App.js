import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Routes from "./src/Routes";

export default class App extends Component<{}> {
    render(){
        return ( 
            <View style = { styles.container }>
                <Text style={{color: '#ffffff', fontSize: 18}}> Hello, World! </Text>  
                <StatusBar backgroundColor="#0081cb" barStyle="light-content" />
                <Routes />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00b0ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});