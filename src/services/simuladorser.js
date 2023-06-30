import config from "../dbconfig.js";
import sql from "mssql";

class SimuladorService {
    getSimuladores = async () =>{
        let returnArray = null;
        try {
            let pool = await sql.connect(config);
            let result =await pool.request()
                                .query('SELECT * FROM Simuladores')
            returnArray = result.recordsets[0];
        }
        catch (error){
            console.log(error)
        }
        return returnArray;
    }
}
export default SimuladorService