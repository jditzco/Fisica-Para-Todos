import express from 'express';
import UsuarioService from '../src/services/usuarioser.js';

const usserr = new UsuarioService();

const router = express();

router.get('/', async (req, res) => {
  let data = await usserr.getUsuario();
  console.log(data)
  if (!data) {
    res.status(404).json({ error: 'Objeto no encontrado' });
  }
  res.json(data);
});

router.post('/add', async (req, res) =>{
  let mail = req.body.gmail
  let nom = req.body.nombre;
  let con = req.body.contraseña;
  let maes
  if(req.body.maestro!=undefined){
    maes = req.body.maestro;
  }
  else{
    maes = false
  }
  console.log(`Nombre: ${nom}, Contraseña: ${con}, Maestro: ${maes}`)
  let data = await usserr.addUsuario(mail, nom, con, maes);
  console.log(data)

  if (!data) {
    return res.status(404).json({ error: 'Objeto no encontrado' });
  } else {
    res.status(201).send('Usuario creado')
  }
});

router.post('/updateProgreso', async (req, res) =>{
  let idUs = req.body.id
  let estr = req.body.estrellas;
  let prog = req.body.progreso;
  console.log(idUs)
  
  let data = await usserr.updateUsuario(idUs, prog, estr);
  console.log(data)

  if (!data) {
    return res.status(404).json({ error: 'Objeto no encontrado' });
  } else {
    res.status(201).send('Usuario modificado')
  }
});
export default router;