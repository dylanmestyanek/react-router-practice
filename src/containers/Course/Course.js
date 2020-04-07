import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Course extends Component {
    render () {
        console.log(this.props)
        let queryParams = new URLSearchParams(this.props.location.search);
        let courseTitle = queryParams.get('title');
        return (
            this.props.match.params.id ? (
                <div>
                    <h1>{courseTitle}</h1>
                    <p>You selected the Course with ID: {this.props.match.params.id}</p>
                </div>
            ) : <h2>Loading...</h2>
        );
    }
}

export default withRouter(Course);