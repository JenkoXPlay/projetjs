import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            pseudo: "",
            password: "",
            rp_password: "",
            subRegister: false
        };
    }

    handleForm = (event) => {
		this.setState({[event.target.name] : event.target.value});
    }

    changementEtat(e) {
        e.preventDefault();
        this.setState({
            subRegister :!this.state.subRegister
        });
    }
    render() {
        let error; 

        if (this.state.subRegister !== false){
            if (this.state.pseudo !== "" && this.state.password !=="" && this.state.rp_password !==""){
                if (this.state.password === this.state.rp_password){
                    /*
                        Grâce à une requête vérifier si le pseudo est présent, si oui alors erreur sinon sendUser
                    */
                    const sendUser = axios.post('http://localhost:8081/register', { pseudo: this.state.pseudo, password: this.state.password });

                } else error = <font color='red'>Les mots de passes ne sont pas identiques</font>  
            } else error = <font color='red' > Erreur</font>;
            
        }
        
        return (
            <div>
                Page d'inscription<br />
                {error}<br/>
                <form>
                    <input type="text" name="pseudo" placeholder="Pseudo" onChange={this.handleForm}/>
                    <br /><br />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleForm}/>
                    <br /><br />
                    <input type="password" name="rp_password" placeholder="Again password" onChange={this.handleForm}/>
                    <br /><br />
                    <input type="submit" name="subRegister" value="Create account" onClick={this.changementEtat.bind(this)}/>
                </form>
                <a href="/login">Connexion</a>
                
            </div>
        );
    }
}

export default Register;
