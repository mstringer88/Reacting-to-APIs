import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DisplayPeople = (props) => {
    return (
        <Fragment>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Name: {props.person.name}</h5>
                    <p className="card-text">Age: {props.person.age}</p>
                    <p className="card-text">Gender: {props.person.gender}</p>
                    <Link to={`/People/${props.person.id}`} className="btn btn-primary">Load Person ID</Link>
                </div>
            </div>
        </Fragment>
    )
};

export default DisplayPeople;