import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format, set } from 'date-fns'; 


export default function MeusCoursosList({ courses }){


    const [openModal, setOpenModal] = useState(false);
    const [openRenewModal, setOpenRenewModal] = useState(false);
    let initialSubscribedState = localStorage.getItem('subscribed');
    initialSubscribedState = initialSubscribedState ? JSON.parse(initialSubscribedState) : {};
    const [subscribed, setSubscribed] = useState(initialSubscribedState);


    useEffect(() => {
        localStorage.setItem('subscribed', JSON.stringify(subscribed));
    }, [subscribed]);

    const getEndofMonth = () => {
        const date = new Date();
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return format(lastDay, 'dd/MM/yyyy');
    }

    const handleCancelSubscription = (event, courseId) => {
        event.stopPropagation();
        event.preventDefault();
        setOpenModal(courseId);
    }
    
    const handleRenewSubscription = (event, courseId) => {
        event.stopPropagation();
        event.preventDefault();
        setOpenRenewModal(courseId);
    }

    const handleUnsubscribe = (courseId) => {
        setSubscribed(prevState => ({ ...prevState, [courseId]: false }));
        setOpenModal(false);
    };
    
    const handleSubscribe = (courseId) => {
        setSubscribed(prevState => ({ ...prevState, [courseId]: true }));
        setOpenRenewModal(false);
    }

  return (
    <div>
        {courses.map(course => (
            course.videos && course.videos.length > 0 && 
                <Link key={course.id} to={`/MeuCursoVideos/${course.id}/${course.videos[0].id}`}>
                <div className="bg-white border border-gray-300 rounded-lg shadow-md flex h-72 w-[1000px] relative mb-5 hover:shadow-xl transform hover:scale-105 transition duration-500">
                    <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}></div>
                    <div className="flex-1 flex flex-col justify-between p-4">
                        <div>
                            <h1 className="text-lg font-bold mb-2">{ course.name }</h1>
                            <div className="mb-2">
                                <p className="text-gray-700 text-sm">Professor: { course.prof }</p>
                                <p className="text-gray-700 text-sm flex flex-row items-center">Avaliação: { course.rating } <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></p>
                            </div>
                            <div className="absolute bottom-0 left-2/4 p-4">
                                {subscribed[course.id] ? 
                                    <div className="bg-red-500 text-white font-semibold rounded-full px-3 py-1" onClick={(event) => handleCancelSubscription(event, course.id)}>Cancelar Subscrição</div> :
                                    <div className="bg-green-500 text-white font-semibold rounded-full px-3 py-1" onClick={(event) => handleRenewSubscription(event, course.id)}>Renovar Subscrição</div>
                                }
                            </div>
                            {!subscribed[course.id] &&
                                    <div className="absolute bottom-0 right-44 py-5 px-2 text-red-500 font-medium">Até {getEndofMonth()}!</div>
                            }
                            <p className="text-gray-700 text-sm mb-4">{ course.medium_description}</p>
                        </div>
                        <div className="absolute bottom-0 right-0 p-4">
                            <div className="bg-gray-200 text-gray-500 text-sm rounded-full px-3 py-1">{ course.subject }</div>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
        {openModal && (
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
                                                Tem certeza que quer cancelar a subscrição?
                                            </h3>
                                            <h2 className=''>
                                                Curso ficará disponivel até ao final do mês ({getEndofMonth()})
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => handleUnsubscribe(openModal)}
                                        >
                                            Sim, eliminar
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => {setOpenModal(!openModal);}}
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
          {openRenewModal && (
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
                                                Tem certeza que quer cancelar a subscrição?
                                            </h3>
                                            <h2 className=''>
                                                Curso ficará disponivel até ao final do mês ({getEndofMonth()})
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => handleSubscribe(openRenewModal)}
                                        >
                                            Sim, eliminar
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => {setOpenRenewModal(!openRenewModal);}}
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
    </div>
  );
}
 