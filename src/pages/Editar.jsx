import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar';
import EditarForm from '../components/EditarForm';
import './Editar.css';

function Editar() {

    return (
        <>
            <NavBar />
            <Container className='card-container'>
                <EditarForm/>
            </Container>
        </>
    );
}

export default Editar