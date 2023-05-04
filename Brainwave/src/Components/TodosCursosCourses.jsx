import { Link } from 'react-router-dom';
import React from 'react';
import image from '../Images/matematica.jpeg';

function TodosCursosCourses() {
  return (
    <div>
        <Link to={"/TodosCursos/Curso"}>
            <div className="bg-white border border-gray-300 rounded-lg shadow-md flex h-48 w-full relative mb-5 hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                        <h1 className="text-lg font-bold mb-2">Título do card</h1>
                        <div className="mb-2">
                            <p className="text-gray-700 text-sm">Professor: John Doe</p>
                            <p className="text-gray-700 text-sm">Avaliação: 4.5 estrelas</p>
                        </div>
                        <p className="text-gray-700 text-sm mb-4">Descrição do card</p>
                    </div>
                    <div className="absolute top-0 right-0 p-4">
                        <div className="bg-green-500 text-white text-sm rounded-full px-3 py-1">R$ 99</div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-4">
                        <div className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1">Disciplina A</div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to={"/TodosCursos/Curso"} className=''>
            <div className="bg-white border border-gray-300 rounded-lg shadow-md flex h-48 w-full relative mb-5 hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                        <h1 className="text-lg font-bold mb-2">Título do card</h1>
                        <div className="mb-2">
                            <p className="text-gray-700 text-sm">Professor: John Doe</p>
                            <p className="text-gray-700 text-sm">Avaliação: 4.5 estrelas</p>
                        </div>
                        <p className="text-gray-700 text-sm mb-4">Descrição do card</p>
                    </div>
                    <div className="absolute top-0 right-0 p-4">
                        <div className="bg-green-500 text-white text-sm rounded-full px-3 py-1">R$ 99</div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-4">
                        <div className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1">Disciplina A</div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to={"/TodosCursos/Curso"} className=''>
            <div className="bg-white border border-gray-300 rounded-lg shadow-md flex h-48 w-full relative mb-5 hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                        <h1 className="text-lg font-bold mb-2">Título do card</h1>
                        <div className="mb-2">
                            <p className="text-gray-700 text-sm">Professor: John Doe</p>
                            <p className="text-gray-700 text-sm">Avaliação: 4.5 estrelas</p>
                        </div>
                        <p className="text-gray-700 text-sm mb-4">Descrição do card</p>
                    </div>
                    <div className="absolute top-0 right-0 p-4">
                        <div className="bg-green-500 text-white text-sm rounded-full px-3 py-1">R$ 99</div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-4">
                        <div className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1">Disciplina A</div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to={"/TodosCursos/Curso"} className=''>
            <div className="bg-white border border-gray-300 rounded-lg shadow-md flex h-48 w-full relative mb-5 hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                        <h1 className="text-lg font-bold mb-2">Título do card</h1>
                        <div className="mb-2">
                            <p className="text-gray-700 text-sm">Professor: John Doe</p>
                            <p className="text-gray-700 text-sm">Avaliação: 4.5 estrelas</p>
                        </div>
                        <p className="text-gray-700 text-sm mb-4">Descrição do card</p>
                    </div>
                    <div className="absolute top-0 right-0 p-4">
                        <div className="bg-green-500 text-white text-sm rounded-full px-3 py-1">R$ 99</div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-4">
                        <div className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1">Disciplina A</div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to={"/TodosCursos/Curso"} className=''>
            <div className="bg-white border border-gray-300 rounded-lg shadow-md flex h-48 w-full relative mb-5 hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                        <h1 className="text-lg font-bold mb-2">Título do card</h1>
                        <div className="mb-2">
                            <p className="text-gray-700 text-sm">Professor: John Doe</p>
                            <p className="text-gray-700 text-sm">Avaliação: 4.5 estrelas</p>
                        </div>
                        <p className="text-gray-700 text-sm mb-4">Descrição do card</p>
                    </div>
                    <div className="absolute top-0 right-0 p-4">
                        <div className="bg-green-500 text-white text-sm rounded-full px-3 py-1">R$ 99</div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-4">
                        <div className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1">Disciplina A</div>
                    </div>
                </div>
            </div>
        </Link>
        <Link to={"/TodosCursos/Curso"} className=''>
            <div className="bg-white border border-gray-300 rounded-lg shadow-md flex h-48 w-full relative mb-5 hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                        <h1 className="text-lg font-bold mb-2">Título do card</h1>
                        <div className="mb-2">
                            <p className="text-gray-700 text-sm">Professor: John Doe</p>
                            <p className="text-gray-700 text-sm">Avaliação: 4.5 estrelas</p>
                        </div>
                        <p className="text-gray-700 text-sm mb-4">Descrição do card</p>
                    </div>
                    <div className="absolute top-0 right-0 p-4">
                        <div className="bg-green-500 text-white text-sm rounded-full px-3 py-1">R$ 99</div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-4">
                        <div className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1">Disciplina A</div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  );
}

export default TodosCursosCourses;