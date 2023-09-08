import config from "../dbconfig.js";
import sql from "mssql";

class UsuarioService {
    
    getUsuario = async () =>{
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .query('SELECT * FROM Usuarios')
            returnEntity = result.recordsets[0];
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

    addUsuario = async (gmail, nombre, contraseña, maestro) =>{
        try {
            let pool = await sql.connect(config);
            await pool.request()
                                .input('gmail', sql.VarChar, gmail)
                                .input('nombre', sql.VarChar, nombre)
                                .input('contraseña', sql.VarChar, contraseña)
                                .input('maestro', sql.Bit, maestro)
                                .query('INSERT INTO Usuarios (gmail, nombre, contraseña, maestro) VALUES (@gmail, @nombre, @contraseña, @maestro);')
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