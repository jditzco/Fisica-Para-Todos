import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
};

function UserModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userData = {
    username: 'UsuarioEjemplo',
    stars: 4,
    profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    email: 'usuario@example.com', // Agregamos el correo electrónico
    isTeacher: true, // Agregamos si es maestro o no (true o false)
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Función para generar estrellas visibles
  const renderStars = () => {
    const starsArray = [];
    for (let i = 0; i < userData.stars; i++) {
      starsArray.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
    return starsArray;
  };

  return (
    <div>
      <img
        src={userData.profilePicture}
        alt={userData.username}
        style={{ maxWidth: '8%', borderRadius: '50%', cursor: 'pointer' }}
        onClick={openModal}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Perfil de Usuario"
      >
        <div>
          <img
            src={userData.profilePicture}
            alt={userData.username}
            style={{ maxWidth: '100%', borderRadius: '50%' }}
          />
          <h2>{userData.username}</h2>
          <p>Cantidad de Estrellas: {renderStars()}</p>
          <p>Email: {userData.email}</p>
          <p>Maestro: {userData.isTeacher ? 'Sí' : 'No'}</p>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </Modal>
    </div>
  );
}

export default UserModalButton;