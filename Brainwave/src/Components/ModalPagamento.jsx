import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

function CourseCard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className='px-3 flex justify-center w-1/4'>
        <div className="card w-full bg-base-100" onClick={openModal}>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
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

export default CourseCard;
