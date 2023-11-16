import config from "../dbconfig.js";
import sql from "mssql";

class UsuarioService {

    getUsuario = async () => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query('SELECT * FROM Usuarios')
            returnEntity = result.recordsets[0];
        }
        catch (error) {
            console.log(error)
        }

        return returnEntity;
    }

    getUsuarioByid = async (idUsuario) => {
        let returnEntity = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('idUsuario', sql.Int, idUsuario)
                .query('SELECT * FROM Usuarios WHERE id = @idUsuario')
            returnEntity = result.recordsets[0];
        }
        catch (error) {
            console.log(error)
        }

        return returnEntity;
    }

    addUsuario = async (gmail, nombre, contraseña, maestro) => {
        try {
            let pool = await sql.connect(config);
            await pool.request()
                .input('gmail', sql.VarChar, gmail)
                .input('nombre', sql.VarChar, nombre)
                .input('contraseña', sql.VarChar, contraseña)
                .input('maestro', sql.Bit, maestro)
                .input('0', sql.Int, 0)
                .input('foto', sql.Text, 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
                .query('INSERT INTO Usuarios (gmail, nombre, contraseña, progreso, estrellas, maestro, foto) VALUES (@gmail, @nombre, @contraseña, @0, @0, @maestro, @foto);')
            pool.close();

            return 'Usuario insertado con éxito.';
        }
        catch (error) {
            console.log(error);
            return 'Error al insertar el usuario.';
        }
    }
    updateUsuarioProgreso = async (idUs, progreso, estrellas) => {
        try {
            let pool = await sql.connect(config);
            await pool.request()
                .input('progreso', sql.Int, progreso)
                .input('estrellas', sql.Int, estrellas)
                .input('idUs', sql.Int, idUs)
                .query('UPDATE Usuarios SET estrellas = @estrellas, progreso = @progreso WHERE id = @idUs;')
            pool.close();

            return 'Usuario insertado con éxito.';
        }
        catch (error) {
            console.log(error);
            return 'Error al modificar el usuario.';
        }
    }
    updateUsuarioPerfil = async (idUs, nom, foto) => {
        try {
            let pool = await sql.connect(config);
            await pool.request()
                .input('nombre', sql.VarChar, nom)
                .input('foto', sql.Text, foto)
                .input('idUs', sql.Int, idUs)
                .query('UPDATE Usuarios SET nombre = @nombre, foto = @foto WHERE id = @idUs;')
            pool.close();

            return 'Usuario insertado con éxito.';
        }
        catch (error) {
            console.log(error);
            return 'Error al modificar el usuario.';
        }
    }
}
export default UsuarioService