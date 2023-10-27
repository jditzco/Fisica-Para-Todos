import config from "../dbconfig.js";
import sql from "mssql";

class PreguntaService {
    
    getPregunta = async () =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .query('SELECT * FROM Preguntas')
            returnEntity = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }

        return returnEntity;
    }
    
    getPreguntaByIdEjercicio = async (idEjercicio) =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .input('idEjercicio', sql.Int, idEjercicio)
                                .query('SELECT * FROM Preguntas WHERE idEjercicio = @idEjercicio')
            returnEntity = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }

        return returnEntity;
    }

    addPregunta = async (pregunta, idEjercicio) =>{
        try {
            let pool = await sql.connect(config);
            await pool.request()
                                .input('pregunta', sql.Text, pregunta)
                                .input('idEjercicio', sql.Int, idEjercicio)
                                .query('INSERT INTO Preguntas (pregunta, idEjercicio) VALUES (@pregunta, @idEjercicio);')
            pool.close();
            
            return 'Pregunta insertado con éxito.';
        } 
        catch (error) {
            console.log(error);
            return 'Error al insertar la pregunta.';
        }
    }

}
export default PreguntaService