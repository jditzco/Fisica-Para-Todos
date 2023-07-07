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

}
export default RespuestaService