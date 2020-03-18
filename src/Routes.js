import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default class Routes extends Component<{}> {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="register" component={Login} title="Register" />
                    {/* <Scene key="home" component={Login} title="Home" /> */}
                </Stack>
            </Router>
        )
    }
}