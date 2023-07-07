import express from 'express';
import PreguntaService from '../src/services/preguntaser.js';

const pregser = new PreguntaService();


const router = express();


router.get('/', async (req, res) => {
    let data = await pregser.getPregunta();
    res.json(data)
});

router.get('/:idpreguntas', async (req, res) => {
    let objectId = req.params.idpreguntas;
    let data = await pregser.getPreguntaByIdEjercicio(objectId);
    console.log(data)
    if (!data) {
      res.status(404).json({ error: 'Objeto no encontrado' });
    }
    res.json(data);
});

export default router;