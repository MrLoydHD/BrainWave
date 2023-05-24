import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function CursosProf({ courses }) {
  const [settingsOn, setSettingsOn] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [lastCourseId, setLastCourseId] = useState(courses.length); 
  const [courseToDelete, setCourseToDelete] = useState(null); 

  const handleSettings = () => {
    setSettingsOn(!settingsOn);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal1 = ( courseID ) => {
    setIsOpen1(true);
    setCourseToDelete(courseID)
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };

  const [errors, setErrors] = useState({});
  const [courseName, setCourseName] = useState('');
  const [courseImage, setCourseImage] = useState('');
  const [courseSubject, setCourseSubject] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [courseDiscount, setCourseDiscount] = useState('');

  const resetForm = () => {
    setErrors({});
    setCourseName('');
    setCourseImage('');
    setCourseSubject('');
    setCourseDescription('');
    setCoursePrice('');
    setCourseDiscount('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (courseName.trim() === '') {
      newErrors.courseName = 'Por favor, insira o nome do curso.';
    }

    if (courseImage.trim() === '') {
      newErrors.courseImage = 'Por favor, selecione uma imagem para o curso.';
    }

    if (courseSubject === '') {
      newErrors.courseSubject = 'Por favor, selecione uma disciplina.';
    }

    if (courseDescription.trim() === '') {
      newErrors.courseDescription = 'Por favor, insira a descrição do curso.';
    }

    if (coursePrice.trim() === '') {
      newErrors.coursePrice = 'Por favor, insira o preço do curso.';
    } else if (parseFloat(coursePrice) <= 0) {
      newErrors.coursePrice = 'O preço do curso deve ser maior que 0.';
    }
  
    if (courseDiscount.trim() === '') {
      newErrors.courseDiscount = 'Por favor, insira o desconto do curso.';
    } else {
      const discount = parseFloat(courseDiscount);
      if (discount < 0 || discount > 100) {
        newErrors.courseDiscount = 'O desconto do curso deve estar entre 0 e 100.';
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const id = lastCourseId + 1; // Incrementa o último ID utilizado
      setLastCourseId(id); // Atualiza o estado do último ID
      const prof = 'João Pontes';
      const rating = 0;
      const numReviews = 0;
      const videoDefault = '';
      const videos = [];
      const numVideos = 0;

      const newCourse = {
            id,
            name: courseName,
            image: courseImage,
            subject: courseSubject,
            prof,
            description: courseDescription,
            price: coursePrice,
            rating,
            discount: courseDiscount,
            numVideos,
            numReviews,
            videoDefault,
            videos,
      };
  
      fetch('http://localhost:3000/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCourse),
    })
      .then(() => {
        resetForm();
        closeModal();

        // Atualizar a lista de cursos filtrados
        const updatedFilteredCourses = [...filteredCourses, newCourse];
        setFilteredCourses(updatedFilteredCourses);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  const deleteCourse = (courseId) => {
    fetch(`http://localhost:3000/courses/${courseId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log("Exclusão bem sucedida");
          // Atualizar a lista de cursos filtrados
          closeModal1();
          const updatedFilteredCourses = filteredCourses.filter(course => course.id !== courseId);
          setFilteredCourses(updatedFilteredCourses);
        } else {
          throw new Error('Erro ao excluir o curso.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    const filtered = courses.filter((course) => course.prof === 'João Pontes');
    setFilteredCourses(filtered);
  }, [courses]);

  return (
    <div>
      <div className="flex justify-between items-center mb-20">
        <h1 className="text-5xl font-bold">Meus cursos</h1>
        <label htmlFor="modal" className="bg-green-600 border-green-600 hover:bg-green-900 hover:border-green-900 text-white text-2xl font-bold py-4 px-10 rounded" onClick={openModal}>
          Criar Curso
        </label>
      </div>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 lili2 font-bold text-left"></th>
            <th className="py-2 px-4 lili2 font-bold text-left">Nome</th>
            <th className="py-2 px-4 lili2 font-bold text-left">Número Vídeos</th>
            <th className="py-2 px-4 lili2 font-bold text-left">Preço</th>
            <th className="py-2 px-4 lili2 font-bold text-left"></th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course) => (
            <tr key={course.id} className='hover:bg-opacity-30 hover:bg-teal-200'>
              <td className="py-2 px-4">
                <Link to={`/EspacoProfessor/${course.id}`}>
                  <img className="w-30 h-20 object-cover" src={course.image} alt={'title'} />
                </Link>
              </td>
              <td className="py-2 px-4 font-semibold">
              <Link to={`/EspacoProfessor/${course.id}`}>{course.name}</Link>
              </td>
              <td className="py-2 px-4 font-semibold">{course.videos.length}</td>
              <td className="py-2 px-4 font-semibold">{course.price}/mês</td>
              <td className="py-2 px-4 dropdown dropdown-end mr-4">
                <div className="relative inline-block text-left mt-4">
                  <label tabIndex={0} onClick={handleSettings} className="btn btn-ghost btn-circle">
                    <div className="rounded-full">
                      <BiDotsVerticalRounded size={24} />
                    </div>
                  </label>
                  {settingsOn && (
                    <ul tabIndex={0} className="p-2 shadow-lg menu menu-compact dropdown-content bg-base-100 rounded-box w-52 absolute right-0">
                      <li>
                        <label htmlFor="modal" /* onClick={openModal(course.id,true)} */>Editar curso</label>
                      </li>
                      <li>
                        <Link to={`/EspacoProfessor/${course.id}`}>Adicionar vídeo</Link>
                      </li>
                      <li>
                        <label onClick={() => openModal1(course.id)}>Apagar curso</label>
                      </li>
                    </ul>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        {/* Modal Criar Curso */}
        {isOpen && (
          <div>
            <input type="checkbox" id="modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-lg modal-bottom sm:modal-middle bg-white shadow rounded-lg">
                    <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={resetForm}>✕</label>
                        <div className="modal-content py-6 px-8">
                          <h3 className="text-2xl font-bold mb-6">Criar Curso</h3>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-1">Nome:</label>
                                <input
                                value={courseName}
                                onChange={(event) => setCourseName(event.target.value)}
                                type="text"
                                id="name"
                                name="name"
                                className={`border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none ${errors.courseName ? 'border-red-500' : ''}`}
                                />
                                {errors.courseName && <p className="text-red-500 mt-2">{errors.courseName}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700 font-bold mb-1">Imagem:</label>
                            <input
                            value={courseImage}
                            onChange={(event) => setCourseImage(event.target.value)}
                            type="file"
                            id="image"
                            name="image"
                            className={`border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none ${errors.courseImage ? 'border-red-500' : ''}`}
                            accept="image/*"
                            />
                            {errors.courseImage && <p className="text-red-500 mt-2">{errors.courseImage}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="discipline" className="block text-gray-700 font-bold mb-1">Disciplina:</label>
                            <select
                                value={courseSubject}
                                onChange={(event) => setCourseSubject(event.target.value)}
                                id="discipline"
                                name="discipline"
                                className={`select select-bordered w-full ${errors.courseSubject ? 'border-red-500' : ''}`}
                            >
                                <option value="">Selecione uma disciplina</option>
                                <option value="Matemática">Matemática</option>
                                <option value="Física e Química">Física e Química</option>
                                <option value="Português">Português</option>
                            </select>
                            {errors.courseSubject && <p className="text-red-500 mt-2">{errors.courseSubject}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-bold mb-1">Descrição:</label>
                            <textarea
                            value={courseDescription}
                            onChange={(event) => setCourseDescription(event.target.value)}
                            id="description"
                            name="description"
                            className={`border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none ${errors.courseDescription ? 'border-red-500' : ''}`}
                            ></textarea>
                            {errors.courseDescription && <p className="text-red-500 mt-2">{errors.courseDescription}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 font-bold mb-1">Preço:</label>
                            <div className="flex items-center">
                            <input
                                value={coursePrice}
                                onChange={(event) => setCoursePrice(event.target.value)}
                                type="number"
                                id="price"
                                name="price"
                                step="5"
                                className={`border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none ${errors.coursePrice ? 'border-red-500' : ''}`}
                            />
                            <span className="ml-2">€/mês</span>
                            </div>
                            {errors.coursePrice && <p className="text-red-500 mt-2">{errors.coursePrice}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="discount" className="block text-gray-700 font-bold mb-1">Desconto:</label>
                            <div className="flex items-center">
                            <input
                                value={courseDiscount}
                                onChange={(event) => setCourseDiscount(event.target.value)}
                                type="number"
                                id="discount"
                                name="discount"
                                step="1"
                                className={`border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none ${errors.courseDiscount ? 'border-red-500' : ''}`}
                            />
                            <span className="ml-2">%</span>
                            </div>
                            {errors.courseDiscount && <p className="text-red-500 mt-2">{errors.courseDiscount}</p>}
                        </div>
                        <div className="flex justify-center">
                            <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleSubmit}
                            >
                            Criar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
        {/* Fim modal */}
        {/* Modal Eliminar Curso */}
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
                                          Tem certeza que quer eliminar o curso?
                                      </h3>
                                  </div>
                              </div>
                              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                  <button
                                      type="button"
                                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                      onClick={() => deleteCourse(courseToDelete)}
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
    </div>
  );
}

export default CursosProf;

