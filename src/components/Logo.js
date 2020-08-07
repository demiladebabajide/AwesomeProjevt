import React, {Component} from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { render } from 'react-dom';

export default class Logo extends Component<{}> {
    render() {
        return ( 
            <View
             style = { styles.container }>
                <Image
                style={{width: 300, height: 80}}
                source={ require("../images/Interswitch-logo.png")}
                />
                {/* <Text style={ styles.logoText }>Interswitch Logo</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flexGrow: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logoText: {
        fontSize: 28,
        // color: 'red',
        // opacity: 0.4
        color: 'rgba(255, 0, 0, 0.4)'
    }
});
