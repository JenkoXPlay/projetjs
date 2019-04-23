import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

class Login extends Component {

    render() {
        return (
            <div>
                Page de login<br />

                <form method="post" action="">
                    <input type="text" name="pseudo" placeholder="Pseudo" />
                    <br /><br />
                    <input type="password" name="password" placeholder="Password" />
                    <br /><br />
                    <input type="submit" name="subConnect" value="Connection" />
                </form>

                <a href="/register">créer un compte</a>
            </div>
        );
    }
}

export default Login;
