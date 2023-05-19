import React from 'react';
import image from '../Images/novoutilizador.jpg';
import { Link } from 'react-router-dom';


function ComentariosCard({ name, comment }) {
  return (
    <div className="bg-base-100">
      <Link to={"/MeuCursoVideos/1/1"}>
        <div className="flex items-start p-4 bg-white shadow-sm rounded-md">
          <img className="w-10 h-10 object-cover rounded-full" src={image} alt={name} />
          <div className="ml-4 flex-1">
            <p className="font-medium">{name} comentou:</p>
            <p className="text-sm text-gray-500">{comment}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ComentariosCard;