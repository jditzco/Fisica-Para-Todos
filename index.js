import express from 'express';
import cors from 'cors';
import respuestasRouter from './routes/respuestas.js'
import preguntasRouter from './routes/preguntas.js'
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
//app.use(express.json)

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

app.get('/ejercicios', async (req, res) => {
  let data = await ejser.getEjercicios();
  res.json(data);
});

app.get('/simuladores', async (req, res) => {
  let data = await simuser.getSimuladores();
  res.json(data);
});

app.get('/usuarios/:idUsuario', async (req, res) => {
  let objectId = req.params.idUsuario;
  let data = await usserr.getUsuario(objectId);
  console.log(data)
  if (!data) {
    res.status(404).json({ error: 'Objeto no encontrado' });
  }
  res.json(data);
});

app.post('/usuarios/add', async (req, res) => {
  let nom = req.body.nombre;
  let con = req.body.contraseña;
  let maes = req.body.maestro;
  let data = await usserr.addUsuario(nom, con, maes);
  console.log(data);

  if (!data) {
    return res.status(404).json({ error: 'Objeto no encontrado' });
  } else {
    res.json(data);
  }
});


app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});