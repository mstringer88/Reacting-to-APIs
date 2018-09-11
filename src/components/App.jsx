import React, { Component, Fragment } from 'react';
import AllFilms from './AllFilms';
//this is required
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'isomorphic-fetch';
import LoadFilms from './LoadFilms';
import AllPeople from './AllPeople';
import DisplayPerson from './DisplayPerson';




class App extends Component {

    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LoadFilms} />
                        <Route exact path="/Films" component={AllFilms} />
                        <Route exact path="/People" component={AllPeople} />
                        <Route exact path="/People/:id" component={DisplayPerson} />
                    </Switch>
                </Router>
            </Fragment>
        );
    }
};

export default App;