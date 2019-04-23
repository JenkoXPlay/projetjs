import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

class Login extends Component {

    render() {
        return (
            <div>
                Page de login<br />
                <a href="/register">créer un compte</a><br />
                <Link to={'/register'}>About page</Link>
            </div>
        );
    }
}

export default Login;
