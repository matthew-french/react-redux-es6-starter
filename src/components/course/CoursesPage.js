import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';


class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    
    courseRow(course, index) {
        return <li key={index}>{course.title}</li>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>

                <ul>
                    {this.props.courses.map(this.courseRow)}
                </ul>

            </div>
        );
    }
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);