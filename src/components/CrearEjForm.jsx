import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import AddPregunta from './AddPregunta';

const CrearEjForm = ({ onFormSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [descrip, setDescrip] = useState('');
  const [cantidadPreguntas, setCantidadPreguntas] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar los datos del formulario si es necesario antes de enviarlos al padre
    onFormSubmit({ titulo, descrip });
    // Limpiar los campos después de enviar el formulario
    setTitulo('');
    setDescrip('');
  };

  const handlePress = () => {
    if(cantidadPreguntas<5)
    {
        setCantidadPreguntas(cantidadPreguntas + 1);
    }
  }

  // Crear un array de componentes "AddPregunta" según la cantidad de preguntas
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
          <AddPregunta key={index} />  // Renderizar "AddPregunta" según la cantidad de preguntas
        ))}
        <button onClick={handlePress} className='mas'>+</button>
        <br /><br />
          <button type="submit" className="center">Crear Ejercicio</button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default CrearEjForm;
