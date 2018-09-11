import React, { Component, Fragment } from 'react';
import AllFilms from './AllFilms';
//this is required
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'isomorphic-fetch';
import LoadFilms from './LoadFilms';


class App extends Component {

    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoadFilms} />
                        <Route exact path="/Home" component={AllFilms} />
                    </Switch>
                </Router>
            </Fragment>
        );
    }
};

export default App;