import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            course: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course });
    }
    
    onClickSave() {
        this.props.dispatch(courseActions.createCourse(this.state.course));
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

                <h2>Add Course</h2>

                <input
                    type="text"
                    value={this.state.course.title}
                    onChange={this.onTitleChange} />

                
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
                
            </div>
        );
    }
}

CoursePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursePage);