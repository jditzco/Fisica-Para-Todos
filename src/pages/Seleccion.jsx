import { Button, Container, Form, Modal } from 'react-bootstrap'
import './Seleccion.css'
import NavBar from '../components/NavBar'
const Seleccion = () => {
    return (
        <>
        <NavBar/>
        <Container className='button-container'>
        <Button variant="info" className='button class="bi bi-mortarboard-fill"'>Simuladores</Button>{' '}
        <Button variant="info" className='button'>Ejercicios</Button>{' '}
        </Container>
        </>
    )
}

export default Seleccion