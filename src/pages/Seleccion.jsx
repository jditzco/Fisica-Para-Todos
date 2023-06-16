import { Button, Container, Form, Modal } from 'react-bootstrap'
import { IconName } from "react-icons/bs";
import './Seleccion.css'
import NavBar from '../components/NavBar'
const Seleccion = () => {
    return (
        <>
        <NavBar/>
        <Container className='button-container'>
        <Button variant="info" className='button'>Simuladores</Button>{' '}
        <Button variant="info" className='button'>Ejercicios</Button>{' '}
        </Container>
        </>
    )
}

export default Seleccion