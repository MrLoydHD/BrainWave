import React from 'react';
import image from '../Images/novoutilizador.jpg';
import { Link } from 'react-router-dom';


function ComentariosCard({ name, comment, imageVideo, titleVideo }) {
  return (
    <div className="bg-base-100">
      <Link to={"/MeuCursoVideos/1/1"}>
        <div className="flex p-4 bg-white shadow-sm rounded-md w-full items-center">
          <div className='w-7/12 flex'>
            <img className="w-10 h-10 object-cover rounded-full" src={image} alt={name} />
            <div className="ml-4 flex-1">
              <p className="font-medium text-xl">{name} comentou:</p>
              <p className="text-sm text-gray-500">{comment}</p>
            </div>
          </div>
          <div className='w-3/12 flex ml-4'>
            <img className="w-20 h-10 object-cover" src={imageVideo} />
            <div className="ml-4 flex-1">
              <p className="font-medium text-xl">{titleVideo}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ComentariosCard;