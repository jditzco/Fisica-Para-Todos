// AddPregunta.jsx

import React, { useState } from 'react';

const AddPregunta = ({ preg, setPreguntas, resp, setRespuestas }) => {
  const [pregunta, setPregunta] = useState({ text: '', id: preg ? preg.id : null });
  const [respuestas, setRespuestasLocal] = useState(resp || [{ text: '', isCorrect: false, idPreg: pregunta.id }]);

  const handleAddRespuesta = () => {
    const cantRespuestas = respuestas.length;
    if (cantRespuestas < 4) {
      setRespuestasLocal([...respuestas, { text: '', isCorrect: false, idPreg: pregunta.id }]);
    }
  };

  const handleChange = (e) => {
    setPregunta({ text: e.target.value, id: pregunta.id });
    console.log(pregunta);
  }

  const handleToggleCorrect = (index) => {
    const updatedRespuestas = [...respuestas];
    updatedRespuestas[index].isCorrect = !updatedRespuestas[index].isCorrect;
    setRespuestasLocal(updatedRespuestas);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const preguntaData = {
      pregunta,
      respuestas,
    };
    console.log('Datos de la pregunta:', preguntaData); // Mostrar datos en la consola
    setPreguntas(pregunta);
    setRespuestas([{ text: '', isCorrect: false, idPreg: pregunta.id }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Pregunta</label>
        <input
          type="text"
          className="form-control"
          value={pregunta.text}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label>Respuestas</label>
        {respuestas.map((respuesta, index) => (
          <div key={index} className="d-flex mb-3">
            <input
              type="text"
              className={`form-control ${respuesta.isCorrect ? 'custom-green-bg' : 'custom-red-bg'}`}
              value={respuesta.text}
              onChange={(e) => {
                const updatedRespuestas = [...respuestas];
                updatedRespuestas[index].text = e.target.value;
                setRespuestasLocal(updatedRespuestas);
              }}
              required
            />
            <button
              type="button"
              className={`btn ${respuesta.isCorrect ? 'btn-success' : 'btn-danger'}`}
              onClick={() => handleToggleCorrect(index)}
            >
              {respuesta.isCorrect ? '✓' : '✗'}
            </button>
          </div>
        ))}

        {respuestas.length < 4 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddRespuesta}
          >
            Agregar Respuesta
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default AddPregunta;
