import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const DisplayFilms = (props) => {
    return (
        <Fragment>
            
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Film Title: {props.film.title}</h5>
                    <p className="card-text">Director: {props.film.director}</p>
                    <p className="card-text">Description: {props.film.description}</p>
                    <p className="card-text">Rating: {props.film.rt_score}</p>
                </div>
            </div>
            <div>
                <Link to="/" className="btn btn-primary">Return Home</Link>
            </div>
            <br />
        </Fragment>
    )
};

export default DisplayFilms;