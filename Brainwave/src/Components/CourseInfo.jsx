import React, { useState } from 'react';
import '../App.css';
import image from '../Images/PayPal-Logo.png';

function CourseInfo({ course, error, isPending}) {

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = () => {
        var id = course.id;
        var name = course.name;
        var image = course.image;
        var subject = course.subject;
        var prof = course.prof;
        var description = course.description;
        var price = course.price;
        var rating = course.rating;
        var subject = course.subject;
        var discount = course.discount;
        var numVideos = course.numVideos;
        var numReviews = course.numReviews;
        var videoDefault = course.videoDefault;
        var videos = course.videos;
        var medium_description = course.medium_description;

        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 3000); // 5000 milisegundos = 5 segundos

        const course1 = { id, name, image, subject, prof, description, price, rating, subject, discount, numVideos, numReviews, videoDefault, videos, medium_description};
    
        fetch('http://localhost:3000/myCourses', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(course1)
        }).then(() => {
          // history.go(-1);
          // history.push('/');
        })
      }



    return (
        <>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { course && (
                <>
                    <div className="md:w-2/3 mt-9">
                        <div className="flex justify-between items-center mb-4 mt-4">
                            <h1 className="text-3xl font-bold">{ course.name }</h1>
                            <h2 className="text-2xl font-bold bg-green-500 rounded-full px-3 py-1" type="text" value={ course.price }>{ course.price }€/mês</h2>
                        </div>
                        <img className="w-full h-128 object-cover mb-4" src={course.image} alt="Imagem do Curso" />
                        <div className="flex justify-between items-center mb-4 pb-14">
                            <h3 className="text-xl font-bold">Disciplina: { course.subject }</h3>
                            <h3 className="text-xl font-bold">Nº de vídeos: { course.numVideos }</h3>
                            <div className='flex flex-row items-center gap-2'>
                                <h3 className="text-xl font-bold flex flex-row items-center">Avaliação: { course.rating } <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></h3>
                                <h3 className="text-xl">({course.numReviews} reviews)</h3>
                            </div>
                            <label htmlFor="modal" className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                                Comprar
                            </label>
                        </div> 
                        <div className="p-6 space-y-6 bg-white shadow-lg rounded-box">
                            <h1 className="text-3xl font-bold py-4">Descrição:</h1>
                            <p className="mb-4">{ course.description }</p>
                        </div>
                    </div>

                    <input type="checkbox" id="modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl modal-bottom sm:modal-middle bg-gray-100">
                            <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div className="modal-content flex">
                                <div className="modal-body w-3/5 p-6">
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-bold mb-4">Informações de Fatura</h3>
                                        <label htmlFor="card-name">Nome do titular do cartão:</label>
                                        <input type="text" id="card-name" className="border border-gray-300 rounded-lg px-4 py-2 mb-4" />
                                        <label htmlFor="card-number">Número do Cartão de Crédito:</label>
                                        <input type="text" id="card-number" className="border border-gray-300 rounded-lg px-4 py-2 mb-4" />
                                        <div className='mb-10'>
                                            <div className="flex">
                                                <div className="w-1/2 pr-2">
                                                    <label htmlFor="expiry-date">Data de Expiração:</label>
                                                    <input type="text" id="expiry-date" className="border border-gray-300 rounded-lg px-4 py-2" />
                                                </div>
                                                <div className="w-1/2 pl-9">
                                                    <label htmlFor="cvv">CVV:</label>
                                                    <input type="text" id="cvv" className="border border-gray-300 rounded-lg px-4 py-2" />
                                                </div>
                                            </div>
                                            <label htmlFor="save-card" className="flex items-center mt-2">
                                                <input type="checkbox" id="save-card" className="form-checkbox h-5 w-5 text-gray-600" />
                                                <span className="ml-2 text-gray-700">Salvar cartão para compras futuras</span>
                                            </label>
                                        </div>
                                        <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mb-4" onClick={handleSubmit}>
                                            Comprar
                                        </button>
                                        <p className="text-center">ou</p>
                                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded flex justify-center">
                                            <div className="image-container mt-2">
                                                <p>Pagar com</p> 
                                            </div>
                                            <div className="image-container">
                                                <img className="w-full h-full object-cover" src={image} alt="title" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-footer w-2/5 p-6">
                                    <h3 className="text-2xl font-bold mb-4">Resumo da Compra</h3>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold">Preço Inicial:</span>
                                        <span>{ course.price }€</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold">Desconto:</span>
                                        <span>-{ course.discount*100 }%</span>
                                    </div>
                                    <hr className="my-2 border-gray-300" />
                                    <div className="flex justify-between mb-2">
                                        <span className="font-bold">Total:</span>
                                        <span className="font-bold">{course.price*(1 - course.discount)} €</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {showAlert && (
                        <div className="alert-box">
                            <div className="alert bg-green-500 font-bold text-white">
                                <p>Compra bem sucedida!</p> 
                                <p>Verifique em "Meu Espaço"</p> 
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default CourseInfo;
