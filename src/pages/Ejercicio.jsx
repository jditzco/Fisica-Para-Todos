import { Button, Container, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Ejercicio.css'
import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react'
import preguntasData from '../data/ejercicio'
/**
 * guardar valores en el estado
 * 
 */

const Test = () => {

   // const preguntas = preguntasData
    const [preguntas, setPreguntas] = useState([])
    const [respuestas, setRespuestas] = useState([])
    const [porcentaje, setPorcentaje] = useState(0)
    const [show, setShow] = useState(false);

    useEffect(() => async() => {
        const response = await fetch('http://localhost:5000/preguntas/1')
        const data = await response.json()
        setPreguntas(data)
    }, [])
    

    useEffect(() => {
        let respuestas = []
        preguntas.forEach(pregunta => {
            respuestas.push({ idPregunta: pregunta.id, respuesta: null, correcta: null })
        })
        setRespuestas(respuestas)
    }, [])

    const calcularPorcentaje = (array) => {
        let cantidadCorrectas = 0
        array.forEach(element => {
            if (element.correcta) cantidadCorrectas++
        })
        let porcentaje = Math.round((cantidadCorrectas / array.length) * 100)
        return porcentaje
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        const idPregunta = Number(name.split('-')[1])

        const nuevasRespuestas = [...respuestas]
        const index = nuevasRespuestas.findIndex((respuesta) => respuesta.idPregunta === idPregunta)
        nuevasRespuestas[index].respuesta = Number(value)
        setRespuestas(nuevasRespuestas)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let correctas = respuestas.map(respuesta => {
            let pregunta = preguntas.find(pregunta => pregunta.id === respuesta.idPregunta)
            let resp = pregunta.respuestas.find(res => res.id === respuesta.respuesta)
            return resp.correcta
        })
        const nuevasRespuestas = [...respuestas].map((respuesta, index) => {
            return { ...respuesta, correcta: correctas[index] }
        })
        console.log(porcentaje)
        setRespuestas(nuevasRespuestas)
        setPorcentaje(calcularPorcentaje(nuevasRespuestas))
        setShow(true)
    }
    return (
        <>
        
            <NavBar />
            <Container className='ejercicio-container'>
                <h1>Suerte!</h1>
                <Form className='form-respuestas-container'>
                    {preguntas?.map((ej, index) => (
                        <div key={index}>
                            <section className='consigna'>
                                
                                <div className='pregunta-container'>
                                    <h3>{ej.pregunta}</h3>
                                </div>
                            </section>
                            <section className='opciones'>
                                
                                <div className='respuestas-container'>
                                    {
                                    
                                        ej.respuestas.map((respuesta, index) => (
                                            <label className='checks' key={index}>
                                                <Form.Check className='checks prevent-select' label={respuesta.respuesta} value={respuesta.id} name={`pregunta-${ej.id}`} type={ej.tipo}
                                            onClick={handleChange} /> 
                                            </label>
                                              
                                        ))
                                    }
                                </div>
                            </section>
                        </div>
                    ))}
                    <Button className='button-submit' variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                </Form>

                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>Resultado</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <h2>Te sacaste un {porcentaje}/100</h2>
                    <Button variant="primary"><Link to={'/'} className='link'>Finalizar ejercicio</Link></Button>
                    </Modal.Body>
                    
                </Modal>

            </Container>
        </>
    )
}

export default Test
