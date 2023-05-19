import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiDotsVerticalRounded } from 'react-icons/bi';

function CursosProf({ courses }) {

  /* const [isModalOpen, setIsModalOpen] = useState(false); */

  // Função para abrir o modal
  /* const openModal = () => {
    setIsModalOpen(true);
  }; */

  // Função para fechar o modal
  /* const closeModal = () => {
    setIsModalOpen(false);
  }; */

  const [settingsOn, setSettingsOn] = useState(false);

  const handleSettings = () => {
    setSettingsOn(!settingsOn);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Meus cursos</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" /* onClick={openModal} */>Criar curso</button>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-left"></th>
            <th className="py-2 px-4 bg-gray-200 text-left">Nome</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Número Vídeos</th>
            <th className="py-2 px-4 bg-gray-200 text-left">Preço</th>
            <th className="py-2 px-4 bg-gray-200 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="py-2 px-4">{course.image}</td>
              <td className="py-2 px-4">{course.name}</td>
              <td className="py-2 px-4">{course.numVideos}</td>
              <td className="py-2 px-4">{course.price}/mês</td>
              <td className="py-2 px-4 dropdown dropdown-end mr-4">
                <div className="relative inline-block text-left">
                    <label tabIndex={0} onClick={handleSettings} className="btn btn-ghost btn-circle">
                        <div className="rounded-full">
                            <BiDotsVerticalRounded size={24} />
                        </div>
                    </label>
                    {settingsOn && (
                        <ul tabIndex={0} className="p-2 shadow-lg menu menu-compact dropdown-content bg-base-100 rounded-box w-52 absolute right-0">
                            <li><Link to="#">Edit</Link></li>
                            <li><Link to="#">Delete</Link></li>
                        </ul>
                    )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CursosProf