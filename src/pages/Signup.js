import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, TouchableOpacity } from 'react-native';

import Logo from "../components/Logo";
import Form from "../components/Form";
import { Actions } from 'react-native-router-flux';

export default class Login extends Component<{}> {

    login() {
        Actions.login()
    }

    goBack() {
        Actions.pop()
    }


    render() {
        return ( 
            <View style = { styles.container }>
                <Text> Signup Page </Text>  
                {/* <StatusBar backgroundColor="#0081cb" barStyle="light-content" /> */}
                <View style = { Formstyles.container }>
                <Text style={{ marginBottom: 100 }}> Signup Form </Text>
                <TextInput
                    placeholder="First name"
                    style={Formstyles.TextInput}
                // onChangeText=
                // // "onChangeText"
                // {text => onChangeText(text)}
                // value=
                // // "value"
                // {value}
                />
                <TextInput
                    placeholder="Last name"
                    style={Formstyles.password}
                    style={Formstyles.TextInput}
                />
                <TextInput
                    // autoCompleteType="email"
                    placeholder="Email"
                    style={Formstyles.TextInput}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    style={Formstyles.TextInput}
                    textContentType="newPassword"
                />
                <TextInput
                    secureTextEntry
                    placeholder="Confirm Password"
                    style={Formstyles.TextInput}
                
                />
                <Form type="Signup"/>
                <View style={styles.signupTextCont}>
                    <Text> Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}>
                    <Text style={styles.signupText}> Log in</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d6f2ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupText: {
        color: '#003f79',
        fontWeight: "500",
        fontSize: 15,
        alignItems: 'center',
    },
    signupTextCont: {
        // flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',        
        flexDirection: 'row'
    }
});

const Formstyles = StyleSheet.create({
    container: {
        // marginTop: 100,
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        margin: 5,
        width: 300,
        height: 50,
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
        fontSize: 20,
        fontWeight: "500",
        color: '#b3e5fc'
    }
});