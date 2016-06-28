import React from 'react';
import {Link} from 'react-router';
import TestComp from '../common/TestComp';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux and React Router and a variety of ther helpful libraries.</p>
                <TestComp/>
            </div>
        );
    }
}

export default AboutPage;

