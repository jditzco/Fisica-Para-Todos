import express from 'express';
import cors from 'cors';
import respuestasRouter from './routes/respuestas.js'
import preguntasRouter from './routes/preguntas.js'
import usuarioRouter from './routes/usuarios.js';
import preguntas from './src/models/preguntas.js';
import UsuarioService from './src/services/usuarioser.js';
import SimuladorService from './src/services/simuladorser.js';
import EjercicioService from './src/services/ejercicioser.js';
import PreguntaService from './src/services/preguntaser.js';
import RespuestaService from './src/services/respuestaser.js';

const app = express();
const port = 5000;

const usserr = new UsuarioService();
const simuser = new SimuladorService();
const ejser = new EjercicioService();
const pregser = new PreguntaService();
const resser = new RespuestaService();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render("docs")
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/respuestas', respuestasRouter)
app.use('/preguntas', preguntasRouter)
app.use('/usuarios', usuarioRouter)

app.get('/ejercicios', async (req, res) => {
  let data = await ejser.getEjercicios();
  res.json(data);
});

app.get('/ejercicios/:id', async (req, res) => {
  let objectId = req.params.id;
  let data = await ejser.getEjerciciosById(objectId);
  res.json(data);
});

app.post('/ejercicios/add', async (req, res) => {
  let ejercicio = req.body.ejercicio
  let preguntas = req.body.preguntas;

  let data

  data = await ejser.addEjercicio(ejercicio.titulo, ejercicio.descripcion, ejercicio.dificultad)

  if (data) {
    let ej
    ej = await ejser.getUltimoEjercicio()

    for (const element of preguntas) {
      data = await pregser.addPregunta(element.text, ej.id)

      const preg = await pregser.getUltimaPregunta()
      console.log(`Las respuestas son ${element.respuestas}`)

      for (const answerElement of element.respuestas) {
        data = await resser.addRespuesta(preg.id, answerElement.text, answerElement.isCorrect)
      }
    }
  } else {
    // Handle the case when the exercise addition fails
    res.status(500).send('Failed to add exercise');
    return;
  }

  res.status(201).send('Ejercicio añadido')
});



app.get('/simuladores', async (req, res) => {
  let data = await simuser.getSimuladores();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});