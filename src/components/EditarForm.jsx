import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { UsuarioContext } from '../context/UsuarioContext';
import { Link } from 'react-router-dom';

function EditarForm() {
  const { usuario } = React.useContext(UsuarioContext);

  const [userData, setUserData] = useState({
    username: usuario.nombre,
    profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData({ ...userData, profilePicture: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleSave = () => {
    guardarDatos();
    handleGoBack();
  };

  const guardarDatos = () => {
    // Aquí puedes realizar la lógica para guardar los datos, por ejemplo, enviar una solicitud HTTP al servidor
    const data = { nombre: userData.username, foto: userData.profilePicture };
    // Ejemplo de cómo imprimir los datos para verificar
    console.log('Datos a guardar:', data);
  };

  return (
    <Card className='carta'>
      <Card.Body>
        <Card.Title className='titulo'>Edita tu perfil</Card.Title>
        <Form>
          <Form.Group controlId='formUsername'>
            <Form.Label className='data'>Nombre de usuario</Form.Label>
            <Form.Control
              type='text'
              name='username'
              value={userData.username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className='data'>Foto de perfil</Form.Label>
            <br />
            <img src={userData.profilePicture} width={250} height={250} className='borde-imagen' alt='Imagen de perfil' />

            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
            />
          </Form.Group>
          <br />
          <div className="text-center">
            <Button variant='secondary' onClick={handleGoBack} className='cancel'>
              Cancelar
            </Button>
            <Button variant='primary' onClick={handleSave} className='save'>
              Guardar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default EditarForm;
