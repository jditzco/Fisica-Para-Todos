import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Seleccion.css'
import NavBar from '../components/NavBar'
const Seleccion = () => {
    return (
        <>
        <NavBar/>
        <Container className='button-container'>
        <Link to={'/simuladores'} ><Button variant="info" className='button'><i class="bi bi-mortarboard-fill"></i><p>Simuladores</p></Button>{' '}</Link>
        <Link to={'/'} ><Button variant="info" className='button'><i class="bi bi-mortarboard-fill"></i><p>Ejercicios</p></Button>{' '}</Link>
        </Container>
        </>
    )
}

export default Seleccion