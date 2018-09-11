import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LoadFilms = () => {
    return (
        <Fragment>
            <img src="https://ghibliapi.herokuapp.com/images/logo.svg" ></img>
            <Link to={'/Home'} className="btn btn-primary">Load Films</Link>
        </Fragment>
    )
};

export default LoadFilms;