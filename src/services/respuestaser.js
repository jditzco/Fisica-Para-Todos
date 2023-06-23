import config from "../dbconfig";
import sql from "mssql";

class respuestaser {
    
    getRespuestas = async (idPreguntas) =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .input('idPreguntas', sql.int, idPreguntas)
                                .query('SELECT * FROM Respuestas WHERE idPreguntas = @idPreguntas')
            returnEntity = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }
        return returnEntity;
    }

}
export default respuestaser