import React, { useState } from 'react';
import '../App.css';
import image from '../Images/PayPal-Logo.png';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';

function CourseInfo() {
    const { id } = useParams();
    const { data: course, error, isPending } = useFetch('http://localhost:3000/courses/' + id);

    const [showAlert, setShowAlert] = useState(false);

    const handleBuyClick = () => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 5000); // 5000 milisegundos = 5 segundos
    };

    return (
        <>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { course && (
                <>
                    <div className="md:w-2/3 mt-9">
                        <div className="flex justify-between items-center mb-4 mt-4">
                            <h1 className="text-3xl font-bold">{ course.name }</h1>
                            <h2 className="text-2xl font-bold" type="text" value={ course.price }>{ course.price }€/mês</h2>
                        </div>
                        <img className="w-full h-96 object-cover mb-4" src="https://via.placeholder.com/800x400" alt="Imagem do Curso" />
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">{ course.subject }</h3>
                            <h3 className="text-xl font-bold">{ course.rating }</h3>
                            <label htmlFor="modal" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Comprar
                            </label>
                        </div>
                        <p className="mb-4">{ course.description }</p>
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
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={handleBuyClick}>
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
                                        <span className="font-bold">{course.price*(1 - course.discount)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {showAlert && (
                        <div className="alert-box">
                        <div className="alert bg-green-500 text-white">
                            Compra bem sucedida!
                        </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default CourseInfo;
