import config from "../dbconfig";
import sql from "mssql";

class preguntaser {
    
    getPregunta = async (idTemas) =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .input('idTemas', sql.int, idTemas)
                                .query('SELECT * FROM Preguntas WHERE IdTemas = @idTemas')
            returnEntity = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }
        return returnEntity;
    }

}
export default preguntaser