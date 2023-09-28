import { Button, Container, Form, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Ejercicio.css';
import NavBar from '../components/NavBar';
import React, { useEffect, useState } from 'react';
import preguntasData from '../data/ejercicio';
import { UsuarioContext } from '../context/UsuarioContext';

const Test = () => {
    const { usuario, setUsuario } = React.useContext(UsuarioContext);
    const post = async(endpoint, newData) => {
        try {
            const response = await fetch(`${endpoint}`, {
                method: 'POST',
                headers: { "Accept": 'application/json', "Content-Type": 'application/json', },
                body: JSON.stringify(newData)
            })
            // return await response.json()
        }
        catch {
            throw new Error(`No se pudo realizar el fetch tipo POST :(`)
        }
    }

    const [estrellas, setEstrellas] = useState(usuario.estrellas)
    const [puntaje, setPuntaje] = useState(usuario.progreso);
    const [preguntas, setPreguntas] = useState([]);
    const [respuestas, setRespuestas] = useState([]);
    const [show, setShow] = useState(false);
    const [text, setText] = useState('')
    const [modalCerrado, setModalCerrado] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/preguntas/' + id);
            const data = await response.json();
            setPreguntas(data);
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        let respuestas = [];
        preguntas.forEach(pregunta => {
            respuestas.push({ idPregunta: pregunta.id, respuesta: null, correcta: null });
        });
        setRespuestas(respuestas);
    }, [preguntas]);
    
    const sumarProgreso = async () => {
        const response = await fetch('http://localhost:5000/ejercicios/' + id);
        const ej = await response.json()
        let prog = puntaje;
        let estr = estrellas;
        console.log(ej)
        console.log(ej[0].dificultad)
        
        switch (ej[0].dificultad){
            case 1:
                prog+=13
            break;
            case 2:
                prog+=3
            break;
            case 3:
                prog+=5
            break;
        }
        
        if (prog>9){
            prog-=10
            estr+=1
        }
        console.log(prog)
        setEstrellas(estr)
        setPuntaje(prog)
        let uUsuario = {id: usuario.id, estrellas: estr, progreso: prog}
        setUsuario(uUsuario)
        let data = {id: usuario.id, gmail: usuario.gmail, nombre: usuario.nombre, contraseña: usuario.contraseña, progreso: prog, estrellas: estr, maestro: usuario.maestro}
        console.log(data)
        post('http://localhost:5000/usuarios/updateProgreso', data)
    }

    const calcularPorcentaje = (array) => {
        let cantidadCorrectas = 0;
        array.forEach(element => {
            if (element.correcta) {
                cantidadCorrectas++;
            }
        });
        if(cantidadCorrectas===array.length){
            sumarProgreso()
            setText(`Felicidades, completaste el ejercicio`)
            setModalCerrado(true);
        } else {
            setText('Debes responder todo correctamente para continuar')
            setModalCerrado(false);
        }
        setShow(true);
        cantidadCorrectas=0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const idPregunta = Number(name.split('-')[1]);
        const nuevasRespuestas = [...respuestas];
        const index = nuevasRespuestas.findIndex((respuesta) => respuesta.idPregunta === idPregunta);
        nuevasRespuestas[index].respuesta = Number(value);
        setRespuestas(nuevasRespuestas);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let correctas = respuestas.map(respuesta => {
            let pregunta = preguntas.find(pregunta => pregunta.id === respuesta.idPregunta);
            let resp = pregunta.respuestas.find(res => res.id === respuesta.respuesta);
            return resp.correcta;
        });
        const nuevasRespuestas = [...respuestas].map((respuesta, index) => {
            return { ...respuesta, correcta: correctas[index] };
        });
        console.log(nuevasRespuestas)
        calcularPorcentaje(nuevasRespuestas);
        setRespuestas(nuevasRespuestas);
    };

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
                                    {ej.respuestas.map((respuesta, index) => (
                                        <label className='checks' key={index}>
                                            <Form.Check.Input
                                                className='checks prevent-select'
                                                type='radio'
                                                name={`pregunta-${ej.id}`}
                                                value={respuesta.id}
                                                checked={respuesta.id === respuestas.find(r => r.idPregunta === ej.id)?.respuesta}
                                                onChange={handleChange}
                                            />
                                            <Form.Check.Label>{respuesta.respuesta}</Form.Check.Label>
                                        </label>
                                    ))}
                                </div>
                            </section>
                        </div>
                    ))}
                    <Button className='button-submit' variant='primary' type='submit' onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>

                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>
                            Resultado
                        </Modal.Title>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Cerrar"
                            onClick={() => setShow(false)}
                        ></button>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>{text}</h2>
                        {modalCerrado && (
                            <Button variant="primary">
                                <Link to={'/listadoEjercicios'} className='link'>Finalizar ejercicio</Link>
                            </Button>
                        )}
                    </Modal.Body>
                </Modal>


            </Container>
        </>
    );
}

export default Test;
