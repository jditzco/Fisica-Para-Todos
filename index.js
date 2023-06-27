import express from 'express';
import EjercicioService from './src/services/ejercicioser.js';
import PreguntaService from './src/services/preguntaser.js';
import RespuestaService from './src/services/respuestaser.js';

const app = express();
const ejser = new EjercicioService();
const pregser = new PreguntaService();
const resser = new RespuestaService();

test_getAllEjercicios();

async function test_getAllEjercicios() {
  let data = await ejser.getEjercicios();
  console.log(data);
  
  app.get('/Ejercicios', (req, res) => {
    res.json(data);
  });
}

app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});

