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
    const [porcentaje, setPorcentaje] = useState(0); 
    const [show, setShow] = useState(false);
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
                prog+=1
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
        post('http://localhost:5000/usuarios/update', data)
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
            setShow(true);
        }
        let nuevoPorcentaje = Math.round((cantidadCorrectas / array.length) * 100);
        cantidadCorrectas=0;
        return nuevoPorcentaje;
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
        const nuevoPorcentaje = calcularPorcentaje(nuevasRespuestas);
        setRespuestas(nuevasRespuestas);
        setPorcentaje(nuevoPorcentaje); 
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
                                            <Form.Check
                                                className='checks prevent-select'
                                                label={respuesta.respuesta}
                                                value={respuesta.id}
                                                name={`pregunta-${ej.id}`}
                                                type={ej.tipo}
                                                onClick={handleChange}
                                            />
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
                        <Modal.Title>Resultado</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <h2>Te sacaste un {porcentaje}/100</h2>
                        <Button variant="primary"><Link to={'/listadoEjercicios'} className='link'>Finalizar ejercicio</Link></Button>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
}

export default Test;
