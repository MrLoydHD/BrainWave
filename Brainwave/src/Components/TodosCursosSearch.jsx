import React from 'react';

function TodosCursosSearch() {
  return (
    <div className='flex items-center w-full'>
      <div className="rounded-lg m-3 w-10/12">
        <h1 className="text-7xl text-gray-800">Todos Cursos</h1>
      </div>
      <div className="rounded-lg shadow-lg flex justify-between w-full bg-transparent m-3">
        <input type="text" placeholder="Pesquisa aqui..." className="input input-bordered w-full" />
        <div className='w-10 mt-1 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-full p-2'>
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
        </div>
      </div>
    </div>
  );
}

export default TodosCursosSearch;