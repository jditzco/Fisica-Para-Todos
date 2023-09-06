import { Container } from 'react-bootstrap'
import NavBar from '../components/NavBar';
import './Login.css'
import LoginForm from '../components/LoginForm';

function Login() {

    return (
        <>
            <NavBar />
            <Container className='card-container'>
                <LoginForm/>
            </Container>
        </>
    );
}

export default Login