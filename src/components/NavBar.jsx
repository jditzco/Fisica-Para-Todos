import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';
import UserModalButton from './ModalUsuario';

function NavBar() {
  return (
    <Navbar bg="light" expand="sm" className='navbar-container'>
        <UserModalButton/>
        <Link to={'/seleccion'}><img src='/img/logo.png' className='logo' alt='Logo'/></Link>
    </Navbar>
  )
}

export default NavBar;