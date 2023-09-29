import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { UsuarioContext } from '../context/UsuarioContext';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import { Button } from 'react-bootstrap';

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
  const {usuario} = React.useContext(UsuarioContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(usuario.estrellas)

  const userData = {
    username: usuario.nombre,
    stars: usuario.estrellas,
    progress: usuario.progreso,
    profilePicture: usuario.foto,
    email:usuario.gmail, 
    isTeacher: usuario.maestro, 
  };

  const openModal = () => {
    console.log(userData.progress)
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
        style={{
          width: '3rem', 
          objectFit: 'cover', 
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center', 
        }}
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
          <p><ProgressBar progress={userData.progress}/></p>
          <p>Email: {userData.email}</p>
          <p>Maestro: {userData.isTeacher ? 'Sí' : 'No'}</p>
          <Link to="/editar">
            <Button variant='secondary'> Editar perfil</Button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default UserModalButton;