import config from "../dbconfig.js";
import sql from "mssql";

class RespuestaService {
    
    getRespuestas = async (idPreguntas) =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .input('idPreguntas', sql.Int, idPreguntas)
                                .query('SELECT * FROM Respuestas WHERE idPreguntas = @idPreguntas')
            returnEntity = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }
        return returnEntity;
    }

}
export default RespuestaService