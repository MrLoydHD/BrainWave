import React from 'react';
import { useState } from 'react';

function TodosCursosSearch({ updateFilteredCourses, courses, resetFilterVisual, searchTerm, setSearchTermm }) {
  const subjects = [...new Set(courses.map(course => course.subject))];
  const titles = [...new Set(courses.map(course => course.name))];
  const options = [...subjects, ...titles];

  const filterResults = () => {
    var filtered = [];
    if (searchTerm === "") {
        filtered = courses;

    } else{
        for (var i = 0; i < courses.length; i++) {
            if (courses[i].subject.toLowerCase().includes(searchTerm.toLowerCase()) || courses[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
                filtered.push(courses[i]);
            }
        }
    } 
    updateFilteredCourses(filtered);
  }

  const clearSearch = () => {
    setSearchTermm("");
    updateFilteredCourses(courses);
  }
  
  return (
    <div className='relative z-10 flex items-center w-full'>
      <div className="rounded-lg m-3 w-10/12">
        <h1 className="text-7xl ml-28 text-gray-800 ">Todos os Cursos</h1>
      </div>
      <div className='relative mt-4 w-8/12 mr-40'>
        <div className="shadow-lg flex justify-between w-full bg-transparent mr-10">
          <button className="rounded-l-lg bg-red-800 border-red-800 w-10 text-sm text-white hover:bg-red-900 hover:border-red-900" 
          onClick={() => {
            clearSearch();
            resetFilterVisual();
          }
          }>
            <svg xmlns="http://www.w3.org/2000/svg" className='pl-1 w-8'  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <input type="text" placeholder="Pesquisa aqui..." className="input input-bordered w-full rounded-none" value={searchTerm} onChange={(event) => {
              setSearchTermm(event.target.value);
            }}
          />
          <button className='w-11 rounded-r-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 p-2' 
          onClick={() => {
            filterResults();
            resetFilterVisual();
          }
          }>
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
          </button>
        </div>
        {searchTerm && (
            <ul className="absolute left-0 w-full bg-white rounded-lg shadow-lg py-2">
              {options
                .filter((option) =>
                  option.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((option) => (
                  <li
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchTermm(option);
                    }}
                  >
                    {option}
                  </li>
                ))}
            </ul>
          )}
      </div>
  </div>

  );
}

export default TodosCursosSearch;