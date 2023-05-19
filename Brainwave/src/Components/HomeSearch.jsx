import { useEffect, useState } from 'react';

function HomeSearch({ isPending, courses}) {
  const [searchTerm, setSearchTerm] = useState("");
  const titles = courses.map((course) => course.name);
  const options = [...new Set(titles)];

  const filterBySubject = (option) => {
    let tempCourse = null;

    for (let i = 0; i < courses.length; i++) {
      if (option === courses[i].name) {
        tempCourse = courses[i];
      }
    }

    if(tempCourse !== null && tempCourse.subject.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }

    return false;
  }

  const handleSearch = () => { 
    for (let i = 0; i < courses.length; i++) {
      if (searchTerm === courses[i].name) {
        window.location.href = "/TodosCursos/" + courses[i].id;
      }
    }
  }

  return (
    //CUIDADO COM ESTE ABSOLUTE
    <div className='w-1/2 absolute' >
      <div className="rounded-lg m-3">
        <h1 className="text-7xl text-white font-bold p-4 text-center">Pesquisar Curso</h1>
      </div>
      <div className="relative">
        <div className="rounded-lg shadow-lg flex items-center w-full bg-white">
          <input 
            type="text" 
            placeholder="Pesquisa aqui..." 
            className="input input-bordered flex-grow px-4 py-2 rounded-none rounded-l-lg border-transparent" 
            value={searchTerm} 
            onChange={(event) => setSearchTerm(event.target.value)} 
          />
          <button className='w-10 h-12 flex items-center justify-center bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-r-lg p-2' onClick={handleSearch}>
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
            </svg>
          </button>
        </div>
        {searchTerm && (
          <ul className="absolute z-10 left-0 w-full bg-white rounded-lg shadow-lg py-2 mt-1">
            {options
              .filter((option) =>
                option.toLowerCase().includes(searchTerm.toLowerCase()) || filterBySubject(option)
              )
              .map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSearchTerm(option)}
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


export default HomeSearch;