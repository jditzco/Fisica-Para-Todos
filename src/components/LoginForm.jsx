import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [listUsername, setListUsername] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => async() => {
    const response = await fetch('http://localhost:5000/usuarios')
    const data = await response.json()
    setListUsername(data)
}, [])

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de verificación de nombre de usuario y contraseña.
    // Por ejemplo, puedes comparar los valores con credenciales predefinidas o hacer una solicitud a un servidor para verificarlos.
    // En este ejemplo, se verifica que el nombre de usuario sea "usuario" y la contraseña sea "contrasena".
    console.log(listUsername[3])
    var isLoggedIn = false
    listUsername.forEach((element) => {
      if (username === element.nombre && password === element.contraseña) {
        isLoggedIn = true
        return
      }
    })
    if (isLoggedIn) setLoggedIn(true)
    else alert('Nombre de usuario o contraseña incorrectos');
  };
  

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='/img/logo.png' />
        <Card.Body className='input-container'>
        {loggedIn ? (
          <div>
            <h2>Bienvenido, {username}!</h2>
            <Button style={{marginTop:'10px', marginBottom: '10px', marginRight:'10px'}}><Link to={'/seleccion'} className='link'>Continuar</Link></Button>
            <button onClick={() => setLoggedIn(false)}>Cerrar sesión</button>
          </div>
        ) : (
          <div>
            <h2>Iniciar sesión</h2>
            <div className="form-group">
              <label>Nombre de usuario:</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="form-control"
              />
            </div>
            <br/>
            <button onClick={handleLogin} className="btn btn-primary">
              Iniciar sesión
            </button>
            <br/>
            <div style={{backgroundColor: '#B2BEB5', borderRadius: '10px', marginTop: '10px'}}>
            <text style={{marginLeft:'10px'}} className='mute'>¿No Tienes una Cuenta?</text> 
            <Button style={{marginTop:'10px', marginBottom: '10px', marginLeft: '10px'}}><Link to={'/registro'} className='link'>Registrarse</Link></Button>
            </div>
         </div>
        )} 
      </Card.Body>
      
    </Card>
  );
};

export default LoginForm;