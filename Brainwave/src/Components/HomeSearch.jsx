import { useState } from 'react';

function HomeSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const options = ["Matematica", "Biologia", "Geologia"];

  return (
    <div className='w-1/2'>
      <div className="rounded-lg m-3">
        <h1 className="text-7xl text-gray-800">Pesquisar Curso</h1>
      </div>
      <div className="relative">
        <div className="rounded-lg shadow-lg flex justify-between w-full bg-transparent">
          <input type="text" placeholder="Pesquisa aqui..." className="input input-bordered w-full" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
          <div className='w-10 mt-1 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-full p-2'>
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
          </div>
        </div>
        {searchTerm && (
          <ul className="absolute z-10 left-0 w-full bg-white rounded-lg shadow-lg py-2">
            {options
              .filter((option) =>
                option.toLowerCase().includes(searchTerm.toLowerCase())
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