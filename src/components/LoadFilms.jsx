import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LoadFilms = () => {
    return (
        <Fragment>
            <img src="https://ghibliapi.herokuapp.com/images/logo.svg" ></img>
            <div>
            <Link to={'/Films'} className="btn btn-primary">Load Films</Link>
            </div>
            <br></br>
            <div>
            <Link to={'/People'} className='btn btn-primary'>Load People</Link>
            </div>
        </Fragment>
    )
};

export default LoadFilms;