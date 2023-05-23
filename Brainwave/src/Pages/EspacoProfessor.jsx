import React, { useEffect, useState } from 'react';

import Navbar from '../Components/Navbar';
import useFetch from '../Hooks/useFetch';
import image from '../Images/novoutilizador1.png';

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
      <main className="flex h-screen">
        <div className="w-1/4 border-r lili2">
            <div className="p-4 flex flex-col items-center">
              <img className="w-9/12 h-full object-cover rounded-ful avatar" src={user.photo} alt={"title"} />
              <h2 className="text-3xl font-medium text-center">{user.name}</h2>
            </div>
            <div className="mt-8">
                <ul className="space-y-2">
                <li>
                    <a className={`block p-4 text-gray-600 ${selectedOption === 'meus-cursos' ? 'bg-stone-400' : ''}`} 
                    onClick={() => setSelectedOption('meus-cursos')}
                    style={{
                      transition: "background-color 0.5s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgb(141, 146, 140)';
                      e.currentTarget.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = '';
                    }}  
                    >Meus Cursos</a>
                </li>
                <li>
                    <a  className={`block p-4 text-gray-600 ${selectedOption === 'comentarios' ? 'bg-stone-400' : ''}`}
                    onClick={() => setSelectedOption('comentarios')}
                    style={{
                      transition: "background-color 0.5s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgb(141, 146, 140)';
                      e.currentTarget.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.color = '';
                    }}>Comentários</a>
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
