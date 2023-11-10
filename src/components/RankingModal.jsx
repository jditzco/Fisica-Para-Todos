import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    maxWidth: '700px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
};

function RankingModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    console.log('Abriendo modal')
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='ml-auto'>
      <img
        src="/img/ranking.png"
        style={{
          width: '3rem', 
          objectFit: 'cover', 
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',
          border: '1px solid black', // Añadir borde negro
        }}
        onClick={openModal}
      />
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  style={modalStyles}
  ariaHideApp={false}
>
        <div className='title'>
          <h2>Ranking</h2>
        </div>
      </Modal>
    </div>
  );
}

export default RankingModalButton;