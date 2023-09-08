import config from "../dbconfig.js";
import sql from "mssql";

class UsuarioService {
    
    getUsuario = async () =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .query('SELECT * FROM Usuarios')
            returnEntity = result;
        }
        catch (error){
            console.log(error)
        }

        return returnEntity;
    }

    getUsuarioByid = async (idUsuario) =>{
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

    addUsuario = async (nombre, contraseña, maestro) =>{
        try {
            let pool = await sql.connect(config);
            await pool.request()
                                .input('nombre', sql.VarChar, nombre)
                                .input('contraseña', sql.VarChar, contraseña)
                                .input('maestro', sql.Bit, maestro)
                                .query('INSERT INTO Usuarios (nombre, contraseña, maestro) VALUES (@nombre, @contraseña, @maestro);')
            pool.close();
            
            return 'Usuario insertado con éxito.';
        } 
        catch (error) {
            console.log(error);
            return 'Error al insertar el usuario.';
        }
    }

}
export default UsuarioService