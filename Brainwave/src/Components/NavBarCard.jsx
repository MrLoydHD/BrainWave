import React from 'react';
import image from '../Images/novoutilizador.jpg';
import { Link } from 'react-router-dom';


function Card({ name, comment }) {
  return (
    <div className='lili'>
        <Link to={"/MeuCursoVideos/1"}>
            <div className="flex items-center space-x-4 p-2 border border-solid shadow-lg rounded-md">
            <img className="w-10 h-10 object-cover rounded-full" src={image} alt={name} />
            <div className="flex-1">
                <p className="font-medium">{name} comentou:</p>
                <p className="text-sm text-gray-500">{comment}</p>
            </div>
            <img className="w-16 h-9" src={image} alt="Content preview" />
            </div>
        </Link>
    </div>
  );
}

export default Card;