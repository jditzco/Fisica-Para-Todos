import React, { useState, useEffect } from 'react';
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
  const [listUsers, setListUsers] = useState(false);

  useEffect(() => async () => {
    const response = await fetch('http://localhost:5000/usuarios')
    const data = await response.json()
    bubbleSort(data)
  }, [])

  const openModal = async () => {
    console.log('Abriendo modal')
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {

      //Inner pass
      for (let j = 0; j < arr.length - i - 1; j++) {

        //Value comparison using ascending order

        if (arr[j + 1].estrellas > arr[j].estrellas) {

          //Swapping
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
        }
      }
    };
    setListUsers(arr)
  }

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