import { Container, Row, Col, Form, InputGroup, Button, ButtonGroup } from 'react-bootstrap'
import './App.css'
import NavBar from './components/NavBar'
import Ejercicio from './components/Ejercicio'

const App = () => {
    console.log("app")
    const variable1 = "jero"
    return (
        <>
            <NavBar />
            <Container className='app-container'>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={9}>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Buscar..." />
                            <Button variant="secondary"><i className="bi bi-search"></i></Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3} className='dificultades-container'>
                        <h4>Dificultades</h4>
                        <div>
                            <ButtonGroup aria-label="Basic example">
                              <Button variant="success">Left</Button>
                              <Button variant="warning">Middle</Button>
                              <Button variant="danger">Right</Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col sm={9} className='ejercicios-container'>
                        <Ejercicio titulo="Ejercicio1" descripcion={"Ehjerciccio xd"} dificultad={"dificldificl"} />
                        <Ejercicio titulo="Ejercicio 2" descripcion={"ejercicio insano"} dificultad={"bien dificil"} />
                        <Ejercicio titulo="Ejercicio 3" descripcion={"fisica en segunods"} dificultad={"facil"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App
