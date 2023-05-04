import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

Modal.setAppElement('#root');

function CourseInfo() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <>
            <div className="md:w-2/3 mt-9">
                <div className="flex justify-between items-center mb-4 mt-4">
                <h1 className="text-3xl font-bold">Nome do Curso</h1>
                <h2 className="text-2xl font-bold">$100</h2>
                </div>
                <img className="w-full h-96 object-cover mb-4" src="https://via.placeholder.com/800x400" alt="Imagem do Curso" />
                <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Disciplina</h3>
                <h3 className="text-xl font-bold">Avaliação</h3>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
                    Comprar
                </button>
                </div>
                <p className="mb-4">Descrição do Curso</p>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Pagamento</h2>
                        <button className="modal-close" onClick={closeModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className="flex flex-col">
                            <label htmlFor="card-number">Número do Cartão de Crédito:</label>
                            <input type="text" id="card-number" className="border border-gray-300 rounded-lg px-4 py-2 mb-4" />
                            <label htmlFor="expiry-date">Data de Expiração:</label>
                            <input type="text" id="expiry-date" className="border border-gray-300 rounded-lg px-4 py-2 mb-4" />
                            <label htmlFor="cvv">CVV:</label>
                            <input type="text" id="cvv" className="border border-gray-300 rounded-lg px-4 py-2 mb-4" />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                                Comprar
                            </button>
                            <p className="text-center">ou</p>
                            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                Pagar com PayPal
                            </button>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <h3 className="modal-summary">Resumo da Compra</h3>
                        <div className="modal-price">$100</div>
                    </div>
                </div>
            </Modal>
        </>
  );
}

export default CourseInfo;