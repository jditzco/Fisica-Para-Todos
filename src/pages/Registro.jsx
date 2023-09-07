import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar';
import './Registro.css'
import RegistroForm from '../components/RegistroForm';

function Registro() {

    return (
        <>
            <NavBar />
            <Container className='card-container'>
                <RegistroForm/>
            </Container>
        </>
    );
}

export default Registro