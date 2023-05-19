import React, { useState } from 'react';

import Navbar from '../Components/Navbar';
import useFetch from '../Hooks/useFetch';
import image from '../Images/novoutilizador.jpg';

import MeusCursos from '../Components/CursosProf';
import Comentarios from '../Components/Comentarios';

function EspacoProfessor() {
  const { error, isPending, data: courses } = useFetch('http://localhost:3000/courses/');

  const user = {
    name: 'João Pontes',
    photo: image,
  };

  const [selectedOption, setSelectedOption] = useState('meus-cursos');

  const renderContent = () => {
    if (selectedOption === 'meus-cursos') {
      return !isPending && <MeusCursos isPending={isPending} courses={courses}/>;
    } else if (selectedOption === 'comentarios') {
      return <Comentarios />;
    }

    return null;
  };

  return (
    <div className='lili min-h-screen'>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex h-screen bg-gray-100">
        <div className="w-1/4 bg-white border-r">
            <div className="p-4 flex flex-col items-center">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-20 rounded-full">
                        <img className="w-full h-full object-cover" src={user.photo} alt={"title"} />
                    </div>
                </label>
                <h2 className="text-3xl font-medium text-center">{user.name}</h2>
            </div>
            <div className="mt-8">
                <ul className="space-y-2">
                <li>
                    <a className={`block p-4 text-gray-600 hover:bg-gray-200 ${selectedOption === 'meus-cursos' ? 'bg-gray-200' : ''}`} onClick={() => setSelectedOption('meus-cursos')}>Meus Cursos</a>
                </li>
                <li>
                    <a className={`block p-4 text-gray-600 hover:bg-gray-200 ${selectedOption === 'comentarios' ? 'bg-gray-200' : ''}`} onClick={() => setSelectedOption('comentarios')}>Comentários</a>
                </li>
                </ul>
            </div>
        </div>
        <div className="w-3/4 p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default EspacoProfessor;
