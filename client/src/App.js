import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import Login from './login';
import Home from './home';
import Register from './register';

class App extends Component {

    render() {
			return (
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact={true} path="/" component={Home} />
							<Route exact={true} path="/login" component={Login} />
							<Route exact={true} path="/register" component={Register} />
							<Route path="*" component={() => <p>Page Not Found</p>} />
						</Switch>
					</div>
				</BrowserRouter>
			);
    }
}

export default App;
