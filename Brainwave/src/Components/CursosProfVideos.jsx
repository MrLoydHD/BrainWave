import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function CursosProfVideos({ course , courses }) {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert1, setShowAlert1] = useState(false);
    const [settingsOn, setSettingsOn] = useState(false);
    const [courseToDelete, setCourseToDelete] = useState(null); 
    const [videoToDelete, setVideoToDelete] = useState(null); 

    const handleSettings = () => {
        setSettingsOn(!settingsOn);
    };

    const courseVideos = course.videos;
    const courseId = course.id;

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal1 = ( courseID,videoID ) => {
      setIsOpen1(true);
      setCourseToDelete(courseID)
      setVideoToDelete(videoID)
    };
  
    const closeModal1 = () => {
      setIsOpen1(false);
    };

    const [errors, setErrors] = useState({});
    const [videoName, setVideoName] = useState('');
    const [videoFile, setVideoFile] = useState('');

    const resetForm = () => {
        setErrors({});
        setVideoName('');
        setVideoFile('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};

        if (videoName.trim() === '') {
        newErrors.videoName = 'Por favor, insira o nome do vídeo.';
        }

        if (videoFile.trim() === '') {
        newErrors.videoFile = 'Por favor, selecione um vídeo para o curso.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
        const id = courseVideos.length + 1;

        const newVideo = {
            id,
            name: videoName,
            duração: '10:00',
        };

        adicionarVideo(courseId, newVideo);
        }
    };

    const adicionarVideo = (courseId, newVideo) => {
        const course = courses.find((course) => course.id === courseId);

        fetch(`http://localhost:3000/courses/${courseId}`, {
        method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
            const updatedCourse = { ...course, videos: [...course.videos, newVideo] };

            fetch(`http://localhost:3000/courses/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedCourse),
            })
                .then((response) => {
                if (response.ok) {
                    console.log('Curso atualizado com sucesso.');
                    mostrarAlerta();
                } else {
                    throw new Error('Erro ao atualizar o curso.');
                }
                })
                .catch((error) => {
                console.error(error);
                });
            } else {
            throw new Error('Erro ao excluir o curso.');
            }
        })
        .catch((error) => {
            console.error(error);
        });

        resetForm();
        closeModal();
    };

    const deleteVideo = (courseId, videoId) => {
        const course = courses.find((course) => course.id === courseId);

        const updatedVideos = course.videos.filter((video) => video.id !== videoId);
        const updatedCourse = { ...course, videos: updatedVideos };

        fetch(`http://localhost:3000/courses/${courseId}`, {
        method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
            fetch(`http://localhost:3000/courses/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedCourse),
            })
                .then((response) => {
                if (response.ok) {
                    console.log('Curso atualizado com sucesso.');
                    closeModal1();
                    mostrarAlerta1();
                } else {
                    throw new Error('Erro ao atualizar o curso.');
                }
                })
                .catch((error) => {
                console.error(error);
                });
            } else {
            throw new Error('Erro ao excluir o curso.');
            }
        })
        .catch((error) => {
            console.error(error);
        });

        resetForm();
        closeModal();
    };

    const mostrarAlerta = () => {
      setShowAlert(true);
      
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    };

    const mostrarAlerta1 = () => {
      setShowAlert1(true);
      
      setTimeout(() => {
        setShowAlert1(false);
      }, 5000);
    };

  return (
    <div>
      <div className="flex justify-between items-center mb-20">
        <div>
            <h1 className="text-5xl font-bold">{ course.name }</h1>
            <p className="text-gray-500 text-2xl">Número de vídeos: { course.videos.length }</p>
        </div>
        <label htmlFor="modal" className="bg-green-600 border-green-600 hover:bg-green-900 hover:border-green-900 text-white text-2xl font-bold py-4 px-10 rounded" onClick={openModal}>
          Adicionar Vídeos
        </label>
      </div>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 lili2 text-left"></th>
            <th className="py-2 px-4 lili2 text-left font-bold">Nome</th>
            <th className="py-2 px-4 lili2 text-left font-bold">Duração</th>
            <th className="py-2 px-4 lili2 text-left font-bold"></th>
          </tr>
        </thead>
        <tbody>
          {courseVideos.map((video) => (
            <tr key={video.id} className='hover:bg-opacity-30 hover:bg-teal-200'>
              <td className="py-2 px-4">
                  <img className="w-30 h-20 object-cover" src={course.image} alt={'title'} />
              </td>
              <td className="py-2 text-lg font-semibold px-4">{video.name}</td>
              <td className="py-2 px-4">{video.duração}</td>
              <td className="py-2 px-4 dropdown dropdown-end mr-4">
                <div className="relative inline-block text-left mt-4">
                  <label tabIndex={0} onClick={handleSettings} className="btn btn-ghost btn-circle">
                    <div className="rounded-full">
                      <BiDotsVerticalRounded size={24} />
                    </div>
                  </label>
                  {settingsOn && (
                    <ul tabIndex={0} className="p-2 shadow-lg menu menu-compact dropdown-content bg-base-100 rounded-box w-52 absolute top-0 left-12">
                      <li>
                        <Link to="#">Editar vídeo</Link>
                      </li>
                      <li>
                        <label onClick={() => openModal1(course.id,video.id)}>Apagar vídeo</label>
                      </li>
                    </ul>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Criar Vídeo */}
      {isOpen && (
          <div>
              <input type="checkbox" id="modal" className="modal-toggle" />
              <div className="modal">
                  <div className="modal-box w-full max-w-lg modal-bottom sm:modal-middle bg-white shadow rounded-lg">
                      <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={resetForm}>✕</label>
                          <div className="modal-content py-6 px-8">
                              <h3 className="text-2xl font-bold mb-6">Adicionar Vídeo</h3>

                              <div className="mb-4">
                                  <label htmlFor="name" className="block text-gray-700 font-bold mb-1">Nome:</label>
                                  <input
                                  value={videoName}
                                  onChange={(event) => setVideoName(event.target.value)}
                                  type="text"
                                  id="name"
                                  name="name"
                                  className={`border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none ${errors.videoFile ? 'border-red-500' : ''}`}
                                  />
                                  {errors.videoName && <p className="text-red-500 mt-2">{errors.videoName}</p>}
                          </div>
                          <div className="mb-4">
                              <label htmlFor="video" className="block text-gray-700 font-bold mb-1">Vídeo:</label>
                              <input
                                  value={videoFile}
                                  onChange={(event) => setVideoFile(event.target.value)}
                                  type="file"
                                  id="video"
                                  name="video"
                                  className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none"
                              />
                              {errors.videoFile && <p className="text-red-500 mt-2">{errors.videoFile}</p>}
                          </div>
                          <div className="flex justify-center">
                              <button
                              type="submit"
                              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                              onClick={handleSubmit}
                              >
                              Adicionar
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )}
      {/* Fim modal */}
      {/* Modal Eliminar Vídeo */}
      {isOpen1 && (
        <div>
            <div className="fixed z-20 inset-0 overflow-x-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                        Tem certeza que quer eliminar o vídeo?
                                    </h3>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => deleteVideo(courseToDelete,videoToDelete)}
                                >
                                    Sim, eliminar
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => {setIsOpen1(false);}}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
      {/* Fim modal */}
      {showAlert && (
          <div className="alert-box">
              <div className="alert bg-green-500 font-bold text-white">
                  <p>Vídeo adicionado com sucesso!</p>
                  <p>Recarregue a página</p> 
              </div>
          </div>
      )}
      {showAlert1 && (
          <div className="alert-box">
              <div className="alert bg-green-500 font-bold text-white">
                  <p>Vídeo apagado com sucesso!</p>
                  <p>Recarregue a página</p> 
              </div>
          </div>
      )}
    </div>
  );
}

export default CursosProfVideos;