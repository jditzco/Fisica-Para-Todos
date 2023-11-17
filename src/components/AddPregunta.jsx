
import React, { useState } from 'react';

const AddPregunta = ({ idPreg, preguntas, setPreguntas, resp, setRespuestas }) => {
  const [respuestas, setRespuestasLocal] = useState([{ text: '', isCorrect: false, idPreg: idPreg, id: 0 }]);
  const [pregunta, setPregunta] = useState({ text: '', id: idPreg, respuestas: { text: '', isCorrect: false, idPreg: idPreg, id: 0 } });

  const handleAddRespuesta = () => {
    const cantRespuestas = respuestas.length;
    if (cantRespuestas < 4) {
      setRespuestasLocal([...respuestas, { text: '', isCorrect: false, idPreg: pregunta.id }]);
    }
  };

  const handleChange = (e) => {
    setPregunta({ text: e.target.value, id: idPreg });

    if (preguntas && preguntas.length > 1) {
      const excuirPreguntas = preguntas.filter((a) => a.id !== idPreg);
      const updatedPreguntas = [{ text: e.target.value, id: idPreg, respuestas: respuestas }, ...excuirPreguntas]
      console.log(updatedPreguntas)
      setPreguntas(pregunta, ...updatedPreguntas);


    } else {
      setPreguntas({ text: e.target.value, id: idPreg, respuestas: respuestas })
      console.log(preguntas)
    }
  }

  const handleResp = (e, index) => {
    if (respuestas && respuestas.length > 0) {
      const updatedRespuestas = [...respuestas];
      updatedRespuestas[index].text = e.target.value;
      updatedRespuestas[index].id = index;
      setRespuestasLocal(updatedRespuestas);
      console.log(respuestas)
      const updatePregunta = pregunta
      updatePregunta.respuestas = updatedRespuestas

    } else {
      setRespuestasLocal([{ text: e.target.value, isCorrect: respuestas[index].isCorrect, idPreg: idPreg, id: index }]);
      console.log(respuestas)
      const updatePregunta = pregunta
      updatePregunta.respuestas = [{ text: e.target.value, isCorrect: respuestas[index].isCorrect, idPreg: idPreg, id: index }]
    }

    const excuirPreguntas = preguntas.filter((a) => a.id !== idPreg);
    const updatedPreguntas = [{ text: preguntas[idPreg].text, id: idPreg, respuestas: respuestas }, ...excuirPreguntas]
    console.log(updatedPreguntas)
    setPreguntas(pregunta, ...updatedPreguntas);
  }

  const handleToggleCorrect = (index) => {
    const updatedRespuestas = [...respuestas];
    updatedRespuestas[index].isCorrect = !updatedRespuestas[index].isCorrect;
    setRespuestasLocal(updatedRespuestas);
  };


  return (
    <>
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
              value={respuestas.text}
              onChange={(e) => handleResp(e, index)}
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
    </>
  );
};

export default AddPregunta;