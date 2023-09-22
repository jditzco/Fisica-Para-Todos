import { Button, Container, Form, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Ejercicio.css';
import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';

const Test = () => {
    const [preguntas, setPreguntas] = useState([]);
    const [respuestas, setRespuestas] = useState([]);
    const [porcentaje, setPorcentaje] = useState(0);
    const [show, setShow] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/preguntas/${id}`);
                const data = await response.json();
                setPreguntas(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let correctas = respuestas.map((respuesta, index) => {
            let pregunta = preguntas.find((pregunta) => pregunta.id === respuesta.idPregunta);
            return pregunta.respuestas.find((res) => res.id === respuesta.respuesta)?.correcta || false;
        });

        const porcentajeCorrectas = (correctas.filter((correcta) => correcta).length / correctas.length) * 100;
        setPorcentaje(porcentajeCorrectas);

        setShow(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const idPregunta = Number(name.split('-')[1]);

        const nuevasRespuestas = [...respuestas];
        const index = nuevasRespuestas.findIndex((respuesta) => respuesta.idPregunta === idPregunta);
        nuevasRespuestas[index].respuesta = Number(value);
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
                                            <Form.Check
                                                className='checks prevent-select'
                                                label={respuesta.respuesta}
                                                value={respuesta.id}
                                                name={`pregunta-${ej.id}`}
                                                type={ej.tipo}
                                                onChange={handleChange}
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
                    <Modal.Body>
                        <h2>Te sacaste un {porcentaje.toFixed(2)}%</h2>
                        <Button variant='primary'>
                            <Link to={'/'} className='link'>
                                Finalizar ejercicio
                            </Link>
                        </Button>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
};

export default Test;
