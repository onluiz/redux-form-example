import React, { Component } from 'react'
import DogForm from './DogForm'

class DogPage extends Component {
    submit = (values) => {
        console.log(values);
    }

    render() {
        return(
            <DogForm onSubmit={ this.submit } />
        );
    }
}

export default DogPage;