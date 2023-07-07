import express from 'express';
import RespuestaService from '../src/services/respuestaser.js';

const resser = new RespuestaService();


const router = express();


router.get('/', async (req, res) => {
    let data = await resser.getRespuestas();
    res.json(data)
});

router.get('/:idpreguntas', async (req, res) => {
    let objectId = req.params.idpreguntas;
    let data = await resser.getRespuestasByIdPregunta(objectId);
    console.log(data)
    if (!data) {
      res.status(404).json({ error: 'Objeto no encontrado' });
    }
    res.json(data);
});

export default router;