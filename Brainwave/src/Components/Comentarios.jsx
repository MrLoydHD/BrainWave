import { useState } from 'react';
import Card from './ComentariosCard';
import imageVideo from '../Images/matematicaCourse1.jpg';

function Comentarios() {
  const [comments, setComments] = useState([
    { id: 1, name: 'Martim Correia', comment: 'Não entendi muito bem o que foi dito no minuto 3:23, poderia explicar melhor?', image: imageVideo, title: 'Introdução'},
    { id: 2, name: 'Carlos Alberto', comment: 'Gostei do video, bastante claro e explicativo', image: imageVideo, title: 'Introdução' },
    // Add as many notifications as you want
  ]);

  return (
    <div className='min-h-screen'>
      <div className="flex justify-between items-center mb-20">
        <h1 className="text-2xl font-bold">Comentários em Vídeos</h1>
      </div>
      <div>
        <ul tabIndex={0} className="mt-3 p-2 h-auto rounded-box w-3/4">
          <div>
            {comments.map(comment => (
              <li key={comment.id} className='mb-4 hover:shadow-lg transform hover:scale-105 transition duration-500"'>
                <Card name={comment.name} comment={comment.comment} imageVideo={comment.image} titleVideo={comment.title}/>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Comentarios