import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="sm" className='navbar-container'>
        <Link to={'/cuenta'}><img src='/img/cuenta.png' className='cuenta' alt='Cuenta'/></Link>
        <Link to={'/seleccion'}><img src='/img/logo.png' className='logo' alt='Logo'/></Link>
    </Navbar>
  )
}

export default NavBar;