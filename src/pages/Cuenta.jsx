import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar';
import './Cuenta.css'
import Avatar from '../components/Avatar';

function Cuenta() {

    return (
        <>
            <NavBar />
            <Container className='card-container'>
                <Avatar/>
            </Container>
        </>
    );
}

export default Cuenta