import React from 'react';
import useFetch from '../Hooks/useFetch';
import CourseList from './CourseList';


function TodosCursosCourses({ error, isPending, courses }) {

    return (
        <div>
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { courses && <CourseList courses={courses} /> }
        </div>
      );
}

export default TodosCursosCourses;