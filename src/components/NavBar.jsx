import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';
import UserModalButton from './ModalUsuario';
import RankingModalButton from './RankingModal';

function NavBar() {
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


export default NavBar;