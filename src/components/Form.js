import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, TouchableOpacity } from 'react-native';

import Logo from "../components/Logo";

export default class Login extends Component<{}> {

    render() {
        return (
            <View style={Formstyles.container}>
                {/* <Text style={{ marginBottom: 100 }}> {this.props.type} Form </Text> */}
                {/* <TextInput
                    // autoCompleteType="email"
                    placeholder="Email"
                    style={Formstyles.TextInput}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    style={Formstyles.password}
                    style={Formstyles.TextInput}
                // onChangeText="onChangeText"
                // // {text => onChangeText(text)}
                // value="value"
                // // {value}
                /> */}
                <TouchableOpacity style={Formstyles.button}>
                    <Text style={Formstyles.buttonText} >
                        {this.props.type}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const Formstyles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        margin: 5,
        width: 300,
        height: 40,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: '#003f79',
        width: 300,
        borderRadius: 25,
        margin: 20,
        padding: 10,
        alignItems:'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 500,
        color: '#b3e5fc'
    }
});