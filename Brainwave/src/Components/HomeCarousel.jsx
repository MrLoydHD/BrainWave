import React from 'react';
import image from '../Images/matematica.jpeg';

function HomeCarousel({isPending, courses}) {
  return (
    <div className="carousel py-10">
        <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
        { !isPending && courses.map(course => (
                (course.id < 4) &&
                <><div className="px-3 flex justify-center w-1/4">
                    <div className="card w-full bg-base-100">
                        <div className="card-body">
                            <img className="w-full h-40 object-cover" src={course.image} alt={"title"} />
                            <div className="flex justify-between items-center">
                                <h1 className="card-title font-bold mb-2 flex-grow p-2">{course.name}</h1>
                                <div className="bg-green-500 text-white text-sm rounded-full px-3 py-1 max-h-8">{course.price}€</div>
                            </div>
                            <p className="text-gray-700 text-sm mb-4 text-left p-2">{course.description}</p>
                            <div className="card-actions justify-end items-center">
                                <p className='text-left p-2 font-bold flex flex-row items-center'>Avaliação: {course.rating} <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></p>
                                <div className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1">{course.subject}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                </div></>
            ))} 
            </div>
            <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
                { !isPending && courses.map(course => (
                    (course.id > 3 && course.id < 7) &&
                    <><div className="px-3 flex justify-center w-1/4">
                        <div className="card w-full bg-base-100">
                            <div className="card-body">
                                <img className="w-full h-40 object-cover" src={course.image} alt={"title"} />
                                <div className="flex justify-between items-center">
                                    <h1 className="card-title font-bold mb-2 flex-grow p-2">{course.name}</h1>
                                    <div className="bg-green-500 text-white text-sm rounded-full px-3 py-1 max-h-8">{course.price}€</div>
                                </div>
                                <p className="text-gray-700 text-sm mb-4 text-left p-2">{course.description}</p>
                                <div className="card-actions justify-end items-center">
                                    <p className='text-left p-2 font-bold flex flex-row items-center'>Avaliação: {course.rating} <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></p>
                                    <div className="bg-gray-200 text-gray-500 text-xs rounded-full px-3 py-1">{course.subject}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                    </div></>
                ))}
            </div>
    </div>
  );
}

export default HomeCarousel;