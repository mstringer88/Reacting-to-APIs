import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LoadFilms = () => {
    return (
        <Fragment>
            <div className="container, text-center">
            <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt=""></img>
            <br />
            <div className='row, text-center'>
            <div>
            <Link to={'/Films'} className="btn btn-primary">Load Films</Link>
            </div>
            <br />
            <div>
            <Link to={'/People'} className='btn btn-primary'>Load People</Link>
            </div>
            </div>
            </div>
        </Fragment>
    )
};

export default LoadFilms;