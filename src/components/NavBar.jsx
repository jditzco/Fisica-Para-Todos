import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';
import UserModalButton from './ModalUsuario';
import RankingModalButton from './RankingModal';
import { UsuarioContext } from '../context/UsuarioContext';
import React from 'react';

function NavBar() {
  const { usuario } = React.useContext(UsuarioContext);

  if(usuario.nombre != null){
    return (
      <Navbar bg="light" expand="sm" className='navbar-container'>
        <UserModalButton />
        <Link to={'/seleccion'}>
          <img src='/img/logo.png' className='logo' alt='Logo' />
        </Link>
        <div className="navbar-buttons">
          <RankingModalButton />
        </div>
      </Navbar>
    );
  }
  else{
    return (
    <Navbar bg="light" expand="sm" className='navbar-container'>
      <img src='/img/logo.png' className='logo' alt='Logo' />
    </Navbar>
    );
  }
}


export default NavBar;