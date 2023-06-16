import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="sm" className='navbar-container'>
        <Link to={'/'}><img src='/img/logo.png' className='logo'/></Link>
        <Link to={'/seleccion'}><img src='/img/logo.png' className='logo'/>Seleccion</Link>
    </Navbar>
  )
}

export default NavBar;