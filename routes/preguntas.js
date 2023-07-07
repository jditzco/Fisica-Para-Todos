import express from 'express';
import PreguntaService from '../src/services/preguntaser.js';
import RespuestaService from '../src/services/respuestaser.js';

const resser = new RespuestaService();
const pregser = new PreguntaService();


const router = express();


router.get('/', async (req, res) => {
    let data = await pregser.getPregunta();
    res.json(data)
});

router.get('/:idpreguntas', async (req, res) => {
    let objectId = req.params.idpreguntas;
    let data = await pregser.getPreguntaByIdEjercicio(objectId);
    const returnVar = await Promise.all(data.map(async (preguntas) => {
        const { id, pregunta, tipo } = preguntas;
        let respuestas = await resser.getRespuestasByIdPregunta(id);
        return { id, pregunta, tipo, respuestas };
      }));
    console.log(returnVar)
    if (!returnVar) {
      res.status(404).json({ error: 'Objeto no encontrado' });
    }
    res.json(returnVar);
});

export default router;