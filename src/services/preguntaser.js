import config from "../dbconfig.js";
import sql from "mssql";

class PreguntaService {
    
    getPregunta = async (idEjercicio) =>{
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

}
export default PreguntaService