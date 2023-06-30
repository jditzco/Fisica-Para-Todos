import express from 'express';
import preguntas from './src/models/preguntas.js';
import SimuladorService from './src/services/simuladorser.js';
import EjercicioService from './src/services/ejercicioser.js';
import PreguntaService from './src/services/preguntaser.js';
import RespuestaService from './src/services/respuestaser.js';

const app = express();
const port = 5000;
const simuser = new SimuladorService();
const ejser = new EjercicioService();
const pregser = new PreguntaService();
const resser = new RespuestaService();

app.get('/ejercicios', async (req, res) => {
  let data = await ejser.getEjercicios();
  res.json(data);
});

app.get('/simuladores', async (req, res) => {
  let data = await simuser.getSimuladores();
  res.json(data);
});

app.get('/preguntas/:idEjercicios', async (req, res) => {
  let objectId = req.params.idEjercicios;
  let data = await pregser.getPregunta(objectId);
  console.log(data)
  if (!data) {
    res.status(404).json({ error: 'Objeto no encontrado' });
  }
  res.json(data);
});

app.get('/respuestas/:idpreguntas', async (req, res) => {
  let objectId = req.params.idpreguntas;
  let data = await resser.getRespuestas(objectId);
  console.log(data)
  if (!data) {
    res.status(404).json({ error: 'Objeto no encontrado' });
  }
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});