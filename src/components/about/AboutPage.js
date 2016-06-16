import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux and React Router and a variety of ther helpful libraries.</p>
                <Link to="home" className="btn btn-primary btn-lg">home</Link>
            </div>
        );
    }
}

export default AboutPage;

