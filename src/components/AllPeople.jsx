import React, { Component } from "react";
import DisplayPeople from './DisplayPeople';

class AllPeople extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataArray: []
        };
    }

    componentWillMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(response => response.json())
            .then(retrievedData =>
                this.setState({
                    dataArray: retrievedData
                })
            )
            .catch(error => console.log(error))
    }

    importPerson() {
        return this.state.dataArray.map(person => {
            return <DisplayPeople key={person.id} person={person} />
        })
    }

    render() {
        return (
            <div>
                {this.importPerson()}
            </div>
        )
    };
};

export default AllPeople;