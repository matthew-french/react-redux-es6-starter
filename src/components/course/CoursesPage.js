import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';


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
        this.props.actions.createCourse(this.state.course);
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