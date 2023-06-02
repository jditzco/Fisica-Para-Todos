import config from "../dbconfig";
import sql from "mssql";

class PFServices {
    getTema = async () =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .query('SELECT * FROM Temas')
        }
        catch (error){
            console.log(error)
        }
        return returnEntity;
    }
    
    getTemaByid = async (idTemas) =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .input('idTemas', sql.int, idTemas)
                                .query('SELECT * FROM Temas WHERE IdTemas = @idTemas')
        }
        catch (error){
            console.log(error)
        }
        return returnEntity;
    }
}