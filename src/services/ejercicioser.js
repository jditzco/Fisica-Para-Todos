import config from "../dbconfig";
import sql from "mssql";

class ejercicioser {
    getEjercicio = async () =>{
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
    
    getTemaByid = async (idTemas) =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .input('idTemas', sql.int, idTemas)
                                .query('SELECT * FROM Temas WHERE IdTemas = @idTemas')
            returnEntity = result;
        }
        catch (error){
            console.log(error)
        }
        return returnEntity;
    }

}
export default ejercicioser