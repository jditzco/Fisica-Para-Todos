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

    addEjercicio = async (titulo, descripcion, dificultad) =>{
        try {
            let pool = await sql.connect(config);
            await pool.request()
                                .input('titulo', sql.Text, titulo)
                                .input('descripcion', sql.Text, descripcion)
                                .input('dificultad', sql.Int, dificultad)
                                .query('INSERT INTO Ejercicios (titulo, descripcion, dificultad) VALUES (@titulo, @descripcion, @dificultad);')
            pool.close();
            
            return 'Ejercicio insertado con éxito.';
        } 
        catch (error) {
            console.log(error);
            return 'Error al insertar el ejercicio.';
        }
    }
}
export default EjercicioService