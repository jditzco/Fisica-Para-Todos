class usuarios{
    id;
    nombre;
    contraseña;
    maestro;
}
//{
//    try{
//        const { data } = await axios({
//            "method": "POST",
//            "url": "",
//            "data": {
//                "usuario"{
//                    "nombre": "",
//                    "contraseña": "",
//                    "maestro": ""
//                }
//            }
//
//        });
//        console.log(data)
//    }
//    
//}

// REGISTRARSE: EJEMPLO: post('/usuarios, usuario)
const post = async(endpoint, newData) => {
    try {
        const response = await fetch(`${API}${endpoint}`, {
            method: 'POST',
            headers: { "Accept": 'application/json', "Content-Type": 'application/json', },
            body: JSON.stringify(newData)
        })
        return await response.json()
    }
    catch {
        throw new Error(`No se pudo realizar el fetch tipo POST :(`)
    }
  }
  
  
export default usuarios