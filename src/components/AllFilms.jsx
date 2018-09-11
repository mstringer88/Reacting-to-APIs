import React, { Component } from "react";
import DisplayFilms from './DisplayFilms';

class AllFilms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArray: []
        };
    }

    componentWillMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(response => response.json())
            .then(retrievedData =>
                this.setState({
                    dataArray: retrievedData
                })
            )
            .catch(error => console.log(error))
    }

    importFilms() {
        return this.state.dataArray.map(film => {
            return <DisplayFilms key={film.title} film={film} />
        })
    }

    render() {
        return (
            <div>
                {this.importFilms()}
            </div>
        )
    };
};

export default AllFilms;