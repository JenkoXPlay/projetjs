import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

import Login from './login';

class Home extends Component {

    render() {
        const session = localStorage.getItem("pseudo");

        if (!session || session === undefined || session === '') {
            return (
                <BrowserRouter>
					<div>
						<Switch>
							<Route exact={true} path="/" component={Login} />
							<Route path="*" component={() => <p>Page Not Found</p>} />
						</Switch>
					</div>
				</BrowserRouter>
            );
        } else {
            return (
                <div>
                    Page Home
                </div>
            );
        }
    }
}

export default Home;
