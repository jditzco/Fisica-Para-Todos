import React, { useState, useTransition } from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function Registro() {
  const schema = yup.object().shape({
    gmail: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        'Ingrese un correo electrónico válido'
      )
      .required('El correo electrónico es requerido'),

    username: yup.string().required('El nombre de usuario es requerido'),

    password: yup
      .string()
      .required('La contraseña es requerida')
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{4,}$/, 'Debe contener al menos 1 número y 1 letra (mínimo 4 carácteres)'),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Debe confirmar la contraseña'),
  });
    
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);
  const [username, setUsername] = useState('');

  const handleSubmit = (values) => {
    // Verificar si los datos son válidos
    schema.isValid(values).then((valid) => {
      if (valid) {
        setUsername(values.username)
        setShowWelcomeAlert(true);
      }
    });
  };

  
  return (
    <>
      <Container className='card-container'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src='/img/logo.png' />
          <Card.Body>
            <Card.Text>
              <Formik
                validationSchema={schema}
                initialValues={{
                  gmail: '',
                  username: '',
                  password: '',
                  confirmPassword: '',
                }}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group as={Col} md="12" controlId="validationFormik101" className="position-relative">
                      <Form.Label>Gmail</Form.Label>
                      <Form.Control
                        type="text"
                        name="gmail"  
                        value={values.gmail}
                        onChange={handleChange}
                        isValid={touched.gmail && !errors.gmail}
                        isInvalid={!!errors.gmail}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.gmail}
                      </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="12" controlId="validationFormik101" className="position-relative">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isValid={touched.username && !errors.username}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="12" controlId="validationFormik102" className="position-relative">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="12" controlId="validationFormik103" className="position-relative">
                      <Form.Label>Confirmar contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        isValid={touched.confirmPassword && !errors.confirmPassword}
                        isInvalid={!!errors.confirmPassword}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <br />

                    <Button style={{ marginRight: '20px', width: 116 }}>
                      <Link to={'/'} className='link'>
                        Volver
                      </Link>
                    </Button>
                    <Button type="submit" style={{ width: 116 }}>
                      Crear cuenta
                    </Button>
                  </Form>
                )}
              </Formik>
              {showWelcomeAlert && (
                <Alert variant="success" onClose={() => setShowWelcomeAlert(false)} dismissible>
                  ¡Bienvenido {username}! Tu cuenta ha sido creada con éxito.
                  <Button style={{marginLeft:'60px'}}><Link to={'/seleccion'} className='link'>Continuar</Link></Button>
                </Alert>)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Registro;
