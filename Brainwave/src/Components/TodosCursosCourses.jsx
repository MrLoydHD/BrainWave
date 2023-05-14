import React from 'react';
import CourseList from './CourseList';


function TodosCursosCourses({ error, isPending, courses }) {

    return (
        <div className="">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { courses && <CourseList courses={courses} /> }
        </div>
      );
}

export default TodosCursosCourses;