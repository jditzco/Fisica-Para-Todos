import { Container, InputGroup, Form, Button } from 'react-bootstrap'
import { useEffect, useState, useRef } from 'react'
import './Simuladores.css'
import NavBar from '../components/NavBar'
import simuladoresData from '../data/simuladores'
import Simulador from '../components/Simulador'
const Simuladores = () => {
    const [listaSimuladores, setListaSimuladores] = useState([])

    const [simuladores, setSimuladores] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const buscarInput = useRef()

    useEffect(() => async() => {
        const response = await fetch('http://localhost:5000/simuladores')
        const data = await response.json()
        console.log(data)
        setListaSimuladores(data)
        setSimuladores(data)
    }, [])

    useEffect(() => {
        var lista = [...listaSimuladores]
        if (busqueda) {
            lista = lista.filter((ej) => (
                ej.titulo.toUpperCase().includes(buscarInput.current.value.toUpperCase())
            ))
        }
        setSimuladores(lista)
    }, [busqueda])

    const handleChange = e => setBusqueda(e.target.value)

    return (
        <>
        <NavBar />
        <Container fluid className='simuladores-container'>
        
            <InputGroup className="mb-3">
                            <Form.Control placeholder="Buscar..."
                                value={busqueda}
                                onChange={handleChange}
                                ref={buscarInput} />
                            <Button variant="secondary"><i className="bi bi-search"></i></Button>
                        </InputGroup>
            <Container sm={9} className='cards-ejercicios-container'>
                {simuladores.map((sim, key) => (
                    <Simulador key={key} titulo={sim.titulo} descripcion={sim.descripcion} dificultad={sim.tema} />
                ))}
            </Container>
        </Container>
            
        </>
    )
}

export default Simuladores