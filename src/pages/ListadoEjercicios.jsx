import { Container, Row, Col, Form, InputGroup, Button, ButtonGroup } from 'react-bootstrap'
import './ListadoEjercicios.css'
import NavBar from '../components/NavBar'
import Ejercicio from '../components/Ejercicio'
import React, { useEffect, useRef, useState, } from 'react'
import { Link } from 'react-router-dom'
import { UsuarioContext } from '../context/UsuarioContext';


const ListadoEjercicios = () => {
    const { usuario } = React.useContext(UsuarioContext);
    const [listaEjercicios, setListaEjercicios] = useState([]);
    const [ejerciciosActivos, setEjerciciosActivos] = useState([]);
    const [dificultad, setDificultad] = useState(0);
    const [busqueda, setBusqueda] = useState('');
    const buscarInput = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/ejercicios');
            const data = await response.json();
            setListaEjercicios(data);
            setEjerciciosActivos(data);
        };

        fetchData();
    }, []);

    useEffect(() => { // Filtrar
        let lista = [...listaEjercicios];
        if (dificultad) lista = lista.filter(ej => ej.dificultad === dificultad);
        if (busqueda) {
            lista = lista.filter((ej) => (
                ej.titulo.toUpperCase().includes(buscarInput.current.value.toUpperCase())
            ));
        }
        setEjerciciosActivos(lista);
    }, [busqueda, dificultad, listaEjercicios]);

    const handleClick = (e) => setDificultad(Number(e.target.value));
    const handleChange = (e) => setBusqueda(e.target.value);


    return (
        <>
            <NavBar />
            <Container fluid className='app-container'>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={9}>
                <InputGroup className="mb-3">
                    {usuario.maestro && (
                        <Link to='/crearEj'>
                            <Button>Crear ejercicio</Button>
                        </Link>
                    )}
                    <Form.Control
                        placeholder="Buscar..."
                        value={busqueda}
                        onChange={handleChange}
                        ref={buscarInput}
                    />
                    <Button variant="secondary"><i className="bi bi-search"></i></Button>
                </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} className='dificultades-container'>
                        <h4>Dificultades</h4>
                        <Button variant="info" value={0} onClick={handleClick} className='dificulty-button'>Reset</Button>
                        <ButtonGroup aria-label="Basic example" className='dificulty-button'>
                            <Button variant="success" value={1} onClick={handleClick}>Principiante</Button>
                            <Button variant="warning" value={2} onClick={handleClick}>Intermedio</Button>
                            <Button variant="danger" value={3} onClick={handleClick}>Avanzado</Button>
                        </ButtonGroup>
                    </Col>
                    <Col sm={9} className='ejercicios-container'>
                        {ejerciciosActivos.map((ej, key) => (
                            <Ejercicio key={key} idEj={ej.id} titulo={ej.titulo} descripcion={ej.descripcion} dificultad={ej.dificultad} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ListadoEjercicios