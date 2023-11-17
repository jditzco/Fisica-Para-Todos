import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Seleccion.css'
import NavBar from './components/NavBar';
import { useRef } from 'react';
const Seleccion = () => {
    const linkSimuladores = useRef()
    const linkHome = useRef()

    const handleClick = (e, params) => {
        console.log(linkSimuladores.current)
        console.log(params)
        if (params === 'simuladores') linkSimuladores.current.click()
        if (params === 'home') linkHome.current.click()
    }
    return (
        <>
        <Link to={'/simuladores'} ref={linkSimuladores}></Link>
        <Link to={'/listadoEjercicios'} ref={linkHome}></Link>
        <NavBar/>
        <Container className='button-container'>
        <Button variant="info" className='button' onClick={(e) => handleClick(e, 'home')}><i className="bi bi-mortarboard-fill"></i><p>Ejercicios</p></Button>{' '}
        </Container>
        </>
    )
}

export default Seleccion
