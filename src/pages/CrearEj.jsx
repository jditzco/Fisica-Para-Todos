import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar';
import CrearEjForm from '../components/CrearEjForm';
import './CrearEj.css';

function CrearEj() {
    
    return (
        <>
            <NavBar />
            <Container className='card-container'>
                <CrearEjForm/>
            </Container>
        </>
    );
}

export default CrearEj