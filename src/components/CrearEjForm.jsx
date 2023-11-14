// CrearEjForm.jsx

import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import AddPregunta from './AddPregunta';
import { Link, useNavigate } from 'react-router-dom';

const CrearEjForm = ({ onFormSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [descrip, setDescrip] = useState('');
  const [cantidadPreguntas, setCantidadPreguntas] = useState(1);
  const [preguntas, setPreguntas] = useState([]);
  const [respuestas, setRespuestas] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    if (titulo !== "" && descrip !== "") {
      event.preventDefault();
      const ejercicioData = {
        titulo,
        descrip,
        preguntas,
        respuestas,
      };
      console.log('Datos del formulario:', ejercicioData); // Mostrar datos en la consola
      //onFormSubmit(ejercicioData);
      setTitulo('');
      setDescrip('');
      navigate("/listadoEjercicios");
    } else {
      alert("Completar todos los datos");
    }
  };

  const handlePress = () => {
    if (cantidadPreguntas < 5) {
      setCantidadPreguntas(cantidadPreguntas + 1);
    }
  }

  const preguntasArray = Array.from({ length: cantidadPreguntas }, (v, i) => i);

  return (
    <Card className='card'>
      <Card.Body>
        <Card.Title>Crear nuevo ejercicio</Card.Title>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Título del Ejercicio</label>
            <input
              type="text"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción del Ejercicio</label>
            <textarea
              className="form-control"
              value={descrip}
              onChange={(e) => setDescrip(e.target.value)}
              required
            />
          </div>

          {preguntasArray.map((index) => (
            <AddPregunta
              key={index}
              idPreg={index}
              preg={preguntas}
              setPreguntas={(pregunta) => {
                const updatedPreguntas = [...preguntas];
                updatedPreguntas[index] = pregunta;
                setPreguntas(updatedPreguntas);
              }}
              setResp={(respuesta) => {
                const updatedRespuestas = [...respuestas];
                updatedRespuestas[index] = respuesta;
                setRespuestas(updatedRespuestas);
              }}
            />
          ))}
          {cantidadPreguntas < 5 ?
            (
              <button onClick={handlePress} className='mas'>+</button>
            ) : null}

          <br /><br />
          <button type="submit" className="center">Crear Ejercicio</button>

        </form>
      </Card.Body>
    </Card>
  );
};

export default CrearEjForm;
