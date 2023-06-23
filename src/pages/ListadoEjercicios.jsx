import { Container, Row, Col, Form, InputGroup, Button, ButtonGroup } from 'react-bootstrap'
import './ListadoEjercicios.css'
import NavBar from '../components/NavBar'
import Ejercicio from '../components/Ejercicio'
import { useEffect, useRef, useState } from 'react'
import data from '../data/data'

const ListadoEjercicios = () => {
    const listaEjercicios = data

    const [ejercicios, setEjercicios] = useState([]) 
    const [busqueda, setBusqueda] = useState('')
    const [dificultad, setDificultad] = useState(0)
    const buscarInput = useRef()

    useEffect(() => setEjercicios(listaEjercicios), [])

    useEffect(() => {
        var lista = [...listaEjercicios]
        if (dificultad) lista = lista.filter(ej => ej.dificultad === dificultad)
        if (busqueda) {
            lista = lista.filter((ej) => (
                ej.titulo.toUpperCase().includes(buscarInput.current.value.toUpperCase())
            ))
        }
        setEjercicios(lista)
    }, [busqueda, dificultad])

    const handleClick = e => setDificultad(Number(e.target.value))
    const handleChange = e => setBusqueda(e.target.value)

    return (
        <>
            <NavBar />
            <Container fluid className='app-container'>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={9}>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Buscar..."
                                value={busqueda}
                                onChange={handleChange}
                                ref={buscarInput} />
                            <Button variant="secondary"><i className="bi bi-search"></i></Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} className='dificultades-container'>
                        <h4>Dificultades</h4>
                        <Button variant="primary" value={0} onClick={handleClick} className='dificulty-button'>Reset</Button>
                        <ButtonGroup aria-label="Basic example" className='dificulty-button'>
                            <Button variant="success" value={1} onClick={handleClick}>Principiante</Button>
                            <Button variant="warning" value={2} onClick={handleClick}>Intermedio</Button>
                            <Button variant="danger" value={3} onClick={handleClick}>Avanzado</Button>
                        </ButtonGroup>
                    </Col>
                    <Col sm={9} className='ejercicios-container'>
                        {ejercicios.map((ej, key) => (
                            <Ejercicio key={key} titulo={ej.titulo} descripcion={ej.descripcion} dificultad={ej.dificultad} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ListadoEjercicios