import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';

class DisplayPerson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singlePerson: {}
        };
    }

    render() {
        return (
            <Fragment>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt=""></img>
                    <div className="card-body">
                        <h5 className="card-title">ID: {this.props.match.params.id}</h5>
                    </div>
                </div>
                <br />
                <div>
                        <Link to="/" className="btn btn-primary">Return Home</Link>
                    </div>
            </Fragment>
        )
    }
};

export default DisplayPerson;