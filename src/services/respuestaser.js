import config from "../dbconfig.js";
import sql from "mssql";

class RespuestaService {
    
    getRespuestas = async () =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .query('SELECT * FROM Respuestas')
            returnEntity = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }
        return returnEntity;
    }
    
    getRespuestasByIdPregunta = async (idPregunta) =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .input('idPregunta', sql.Int, idPregunta)
                                .query('SELECT * FROM Respuestas WHERE idPregunta = @idPregunta')
            returnEntity = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }
        return returnEntity;
    }

    addRespuesta = async (idPregunta, respuesta, correcta) =>{
        try {
            let pool = await sql.connect(config);
            await pool.request()
                                .input('idPregunta', sql.Int, idPregunta)
                                .input('respuesta', sql.Text, respuesta)
                                .input('correcta', sql.Bit, correcta)
                                .query('INSERT INTO Respuestas (idPregunta, respuesta, correcta) VALUES (@idPregunta, @respuesta, @correcta);')
            pool.close();
            
            return 'Respuesta insertado con éxito.';
        } 
        catch (error) {
            console.log(error);
            return 'Error al insertar la respuesta.';
        }
    }

}
export default RespuestaService