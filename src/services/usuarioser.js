import config from "../dbconfig.js";
import sql from "mssql";

class UsuarioService {
    
    getUsuario = async (idUsuario) =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .input('idUsuario', sql.Int, idUsuario)
                                .query('SELECT * FROM Usuarios WHERE id = @idUsuario')
            returnEntity = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }

        return returnEntity;
    }

}
export default UsuarioService