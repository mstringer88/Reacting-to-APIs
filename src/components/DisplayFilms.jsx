import React from 'react';

const DisplayFilms = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Film Title: {props.film.title}</h5>
                <p className="card-text">Director: {props.film.director}</p>
                <p className="card-text">Description: {props.film.description}</p>
                <p className="card-text">Rating: {props.film.rt_score}</p>
            </div>
        </div>
    )
};

export default DisplayFilms;