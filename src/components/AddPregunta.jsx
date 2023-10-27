import React, { useState } from 'react';

const AddPregunta = () => {
  const [pregunta, setPregunta] = useState('');
  const [respuestas, setRespuestas] = useState([{ text: '', isCorrect: false }]); // Usar un array para manejar respuestas

  const handleAddRespuesta = () => {
    const cantRespuestas = respuestas.length;
    if(cantRespuestas<4)
    {
        setRespuestas([...respuestas, { text: '', isCorrect: false }]); // Agregar una respuesta vacía al array
    }
  };

  const handleToggleCorrect = (index) => {
    const updatedRespuestas = [...respuestas];
    updatedRespuestas[index].isCorrect = !updatedRespuestas[index].isCorrect; // Invertir el valor de isCorrect
    setRespuestas(updatedRespuestas);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar los datos del formulario si es necesario antes de enviarlos al padre
    onFormSubmit({ pregunta, respuestas });
    // Limpiar los campos después de enviar el formulario
    setPregunta('');
    setRespuestas([{ text: '', isCorrect: false }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Pregunta</label>
        <input
          type="text"
          className="form-control"
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
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
                setRespuestas(updatedRespuestas);
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddRespuesta}
        >
          Agregar Respuesta
        </button>
      </div>
    </form>
  );
};

export default AddPregunta;
