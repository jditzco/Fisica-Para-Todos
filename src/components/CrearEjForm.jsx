// CrearEjForm.jsx

import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import AddPregunta from './AddPregunta';
import { Link, useNavigate } from 'react-router-dom';


const CrearEjForm = ({ onFormSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [dificultad, setDificultad] = useState(1);
  const [descrip, setDescrip] = useState('');
  const [cantidadPreguntas, setCantidadPreguntas] = useState(1);
  const [preguntas, setPreguntas] = useState([{}]);
  const [respuestas, setRespuestas] = useState([]);
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
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    let data = {
      ejercicio: {
        titulo: titulo,
        descripcion: descrip,
        dificultad: dificultad
      },
      preguntas: preguntas
    }
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
      post('http://localhost:5000/ejercicios/add', data)
      setTitulo('');
      setDescrip('');
      
      console.log(data)
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
    <Card className='card' style={{ overflowY: 'auto', maxHeight: '80vh' }}>
      <Card.Body style={{ flexDirection: 'column' }}>
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
          <div className="mb-3">
            <label className="form-label">Dificultad</label>
            <select
              className="form-select"
              value={dificultad}
              onChange={(e) => setDificultad(e.target.value)}
            >
              <option value="1">Fácil</option>
              <option value="2">Intermedio</option>
              <option value="3">Difícil</option>
            </select>
          </div>


          {preguntasArray.map((index) => (
            <AddPregunta
              key={index}
              idPreg={index}
              preguntas={preguntas}
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
