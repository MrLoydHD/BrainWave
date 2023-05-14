import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { useState } from 'react';
import ReactPlayer from 'react-player'
import image from '../Images/novoutilizador.jpg';

function MeuCursoVideos() {
    const { id } = useParams();
    const { data: course, error, isPending } = useFetch('http://localhost:3000/courses/' + id);
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [submitReply, setSubmitReply] = useState(null);
    const [replyContent, setReplyContent] = useState('');
    const [showReplyBox2, setShowReplyBox2] = useState(false);
    const [submitReply2, setSubmitReply2] = useState(null);
    const [replyContent2, setReplyContent2] = useState('');
    const [disabledButton, setDisabledButton] = useState(false);
    const [disabledButton2, setDisabledButton2] = useState(false);
    const [commentContent, setCommentContent] = useState('');
    const [submitComment, setSubmitComment] = useState(false);


    // Mocked video list
    const videoList = [
        { id: 1, title: 'Video 1', url: 'http://video1.com' },
        { id: 2, title: 'Video 2', url: 'http://video2.com' },
        //...
    ];

    // Mocked comments
    const commentList = [
        { id: 1, user: 'Martim Correia', comment: 'Não entendi muito bem o que foi dito no minuto 3:23, poderia explicar melhor?' },
        { id: 2, user: 'Carlos Alberto', comment: 'Gostei do video, bastante claro e explicativo' },
        //...
    ];

    const handleReply = (id) => {
        setShowReplyBox(!showReplyBox);
    }

    const handleSubmitReply = () => {
        setShowReplyBox(!showReplyBox);
        setSubmitReply(!submitReply);
        setDisabledButton(true);
    }

    const handleReply2 = () => {
        setShowReplyBox2(!showReplyBox2);
    }

    const handleSubmitReply2 = () => {
        setShowReplyBox2(!showReplyBox2);
        setSubmitReply2(!submitReply2);
        setDisabledButton2(true);
    }

    const handleSubmitComment = () => {
        setSubmitComment(!submitComment);
    }

  
    return (
      !isPending && (<div className='lili min-h-screen'>
          <header>
              <Navbar></Navbar>
          </header> 
          <main>
          <div className="md:mx-32 flex flex-col md:flex-row">
                <div className="w-full p-4 flex flex-col">
                    <div className="w-full mb-4">
                        <h1 className="text-3xl font-bold">{ course.name }</h1>
                        <div className='pt-5 w-full' style={{ height: '68.5vh' }}>
                            <ReactPlayer 
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                                controls="true"
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </div>

                    <div className="w-full flex-grow">
                        <h1 className="text-3xl font-bold pb-7">Inserir o nome do video aqui</h1>
                        <h3 className="text-3xl font-bold mb-2">Comentários:</h3>
                            {(!submitComment) && <div className="mb-4 bg-white shadow rounded-lg overflow-hidden">
                                <div className="p-4">
                                    <textarea placeholder="Escreve um comentário" value={commentContent} className="w-full p-2 border border-gray-300 rounded" onChange={(e) => setCommentContent(e.target.value)}></textarea>
                                </div>
                                <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
                                    <button className="text-green-600 hover:text-green-900  text-sm font-semibold" onClick={handleSubmitComment}>Comentar</button>
                                </div>
                            </div>}
                            {(submitComment) &&
                                <div className="mb-4 bg-white shadow rounded-lg overflow-hidden">
                                    <div className="p-4">
                                        <div className='flex flex-row items-center pb-6'>
                                            <img className="w-12 h-12 object-cover rounded-full mr-4" src={image} alt="Imagem de aluno" />
                                            <h4 className="text-lg font-bold mb-2">Mano bro</h4>
                                        </div>
                                        <p className="text-gray-700">{commentContent}</p>
                                    </div>
                                    <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
                                        <button className="text-green-600 hover:text-green-900  text-sm font-semibold">Responder</button>
                                    </div>
                                </div>
                            }
                            <div className="mb-4 bg-white shadow rounded-lg overflow-hidden">
                                <div className="p-4">
                                    <div className='flex flex-row items-center pb-6'>
                                        <img className="w-12 h-12 object-cover rounded-full mr-4" src={image} alt="Imagem de aluno" />
                                        <h4 className="text-lg font-bold mb-2">Martim Correia</h4>
                                    </div>
                                    <p className="text-gray-700">Não entendi muito bem o que foi dito no minuto 3:23, poderia explicar melhor?</p>
                                </div>
                                <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
                                    <button id="1" className="text-green-600 hover:text-green-900  text-sm font-semibold" onClick={handleReply} disabled={disabledButton}>Responder</button>
                                </div>
                            </div>
                            {(showReplyBox) &&
                                <div className="mb-4 bg-white shadow rounded-lg overflow-hidden ml-10">
                                    <div className="p-4">
                                        <textarea placeholder="Escreva a sua resposta" value={replyContent} className="w-full p-2 border border-gray-300 rounded" onChange={(e) => setReplyContent(e.target.value)}></textarea>
                                    </div>
                                    <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
                                        <button className="text-green-600 hover:text-green-900  text-sm font-semibold" onClick={handleSubmitReply}>Enviar Resposta</button>
                                    </div>
                                </div>
                            }
                            {(submitReply) &&
                                <div className="mb-4 bg-white shadow rounded-lg overflow-hidden ml-10">
                                    <div className="p-4">
                                        <div className='flex flex-row items-center pb-6'>
                                            <img className="w-12 h-12 object-cover rounded-full mr-4" src={image} alt="Imagem de aluno" />
                                            <h4 className="text-lg font-bold mb-2">Mano bro</h4>
                                        </div>
                                        <p className="text-gray-700">{replyContent}</p>
                                    </div>
                                    <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
                                        <button className="text-green-600 hover:text-green-900  text-sm font-semibold">Responder</button>
                                    </div>
                                </div>
                            }
                            <div className="mb-4 bg-white shadow rounded-lg overflow-hidden">
                                <div className="p-4">
                                    <div className='flex flex-row items-center pb-6'>
                                        <img className="w-12 h-12 object-cover rounded-full mr-4" src={image} alt="Imagem de aluno" />
                                        <h4 className="text-lg font-bold mb-2">Carlos Alberto</h4>
                                    </div>
                                    <p className="text-gray-700">Gostei do video, bastante claro e explicativo</p>
                                </div>
                                <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
                                    <button id="2" className="text-green-600 hover:text-green-900  text-sm font-semibold" onClick={handleReply2} disabled={disabledButton2}>Responder</button>
                                </div>
                            </div>
                            {(showReplyBox2) &&
                                <div className="mb-4 bg-white shadow rounded-lg overflow-hidden ml-10">
                                    <div className="p-4">
                                        <textarea placeholder="Escreva a sua resposta" value={replyContent2} className="w-full p-2 border border-gray-300 rounded" onChange={(e) => setReplyContent2(e.target.value)}></textarea>
                                    </div>
                                    <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
                                        <button className="text-green-600 hover:text-green-900  text-sm font-semibold" onClick={handleSubmitReply2}>Enviar Resposta</button>
                                    </div>
                                </div>
                            }
                            {(submitReply2) &&
                                <div className="mb-4 bg-white shadow rounded-lg overflow-hidden ml-10">
                                    <div className="p-4">
                                        <div className='flex flex-row items-center pb-6'>
                                            <img className="w-12 h-12 object-cover rounded-full mr-4" src={image} alt="Imagem de aluno" />
                                            <h4 className="text-lg font-bold mb-2">Mano bro</h4>
                                        </div>
                                        <p className="text-gray-700">{replyContent2}</p>
                                    </div>
                                    <div className="px-4 py-2 bg-gray-100 border-t border-gray-200">
                                        <button className="text-green-600 hover:text-green-900  text-sm font-semibold">Responder</button>
                                    </div>
                                </div>
                            }
                    </div>
                </div>

                <div className="w-32 md:w-5/12 pl-6 pt-16">
                    <h3 className="text-xl font-bold mb-2">Lista de vídeos</h3>
                    {videoList.map(video => (
                        <div key={video.id} className="card lg:card-side mb-4 bg-white shadow rounded-lg overflow-hidden cursor-pointer hover:bg-gray-200 p-2" onClick={() => handleVideoSelect(video)}>
                            <figure><img className="h-16 w-22" src="https://est.ipca.pt/wp-content/uploads/sites/4/2017/11/1.jpg" alt="Movie"/></figure>
                            <div className="p-4 flex flex-row items-center gap-2">
                                <div>
                                    <h4 className="text-lg font-bold mb-2">{video.title}</h4>
                                    <p className="text-gray-700">Duração: {video.duration}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </main>
      </div>
      ))
  }
  
  export default MeuCursoVideos