import config from "../dbconfig.js";
import sql from "mssql";

class EjercicioService {
    getEjercicios = async () =>{
        let returnArray = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .query('SELECT * FROM Ejercicios')
            returnArray = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }
        return returnArray;
    }
    getEjerciciosById = async (id) =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                                .input('id', sql.Int, id)
                                .query('SELECT TOP 1 * FROM Ejercicios WHERE id = @id')
            returnEntity = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }

        return returnEntity;
    }
}
export default EjercicioService