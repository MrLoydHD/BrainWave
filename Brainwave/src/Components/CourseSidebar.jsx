import React from 'react';
import image from '../Images/novoutilizador.jpg';

function CourseSidebar() {
  return (
    <div>
        <div className="flex items-center px-4 py-2 border-b">
            <img className="w-12 h-12 object-cover rounded-full mr-4" src={image} alt="Imagem do Professor" />
            <h4 className="text-lg font-bold">Nome do Professor</h4>
            </div>
            <div className="p-4 border-b">
            <h4 className="text-xl font-bold mb-4">Cursos Similares</h4>
            <ul className="list-disc list-inside">
                <li>Curso Similar 1</li>
                <li>Curso Similar 2</li>
                <li>Curso Similar 3</li>
            </ul>
            </div>
            <div className="p-4">
            <h4 className="text-xl font-bold mb-4">Comentários de Avaliação</h4>
            <ul className="list-disc list-inside">
                <li>Comentário 1</li>
                <li>Comentário 2</li>
                <li>Comentário 3</li>
            </ul>
        </div>
    </div>
  );
}

export default CourseSidebar;