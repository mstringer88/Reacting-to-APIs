import React, { Component, Fragment } from 'react';
import AllFilms from './AllFilms';
//this is required
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'isomorphic-fetch';

class App extends Component {

    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <AllFilms />
                    </Switch>
                </Router>
            </Fragment>
        );
    }
};

export default App;