import React from 'react';
import {link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return {
            <div className="jumbotron">
                <h1>Administration</h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <link to="about" className="btn btn-primary btn-lg">learn more</link>
            </div>
        };
    }
}

export default HomePage;