import React, {Component} from 'react';

class Register extends Component {

    render() {
        return (
            <div>
                Page d'inscription<br />
                <form method="post" action="">
                    <input type="text" name="pseudo" placeholder="Pseudo" />
                    <br /><br />
                    <input type="password" name="password" placeholder="Password" />
                    <br /><br />
                    <input type="password" name="rp_password" placeholder="Again password" />
                    <br /><br />
                    <input type="submit" name="subRegister" value="Create account" />
                </form>
                <a href="/login">Connexion</a>
            </div>
        );
    }
}

export default Register;
