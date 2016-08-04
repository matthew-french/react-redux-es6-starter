import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';
import {getAuthorById} from '../../selectors/selectors';

const CourseList = ({courses,authors}) => {
  return (
    <div>
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
          <CourseListRow
            key={course.id}
            course={course}
            author={getAuthorById(authors,course.authorId)}
          />
        )}
      </tbody>
    </table>
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired
};

export default CourseList;