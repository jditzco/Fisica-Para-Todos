import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="sm" className='navbar-container'>
        <Link to={'/seleccion'}><img src='/img/logo.png' className='logo'/></Link>
    </Navbar>
  )
}

export default NavBar;