import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Formik } from 'formik';
import * as yup from 'yup';

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
    password: yup.string().required('La contraseña es requerida'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Debe confirmar la contraseña'),
  });

  return (
    <>
      <Container className='card-container'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src='/img/logo.png' />
          <Card.Body>
            <Card.Text>
              <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                  // Aquí puedes manejar la lógica para enviar el formulario
                  console.log(values);
                }}
                initialValues={{
                  gmail: '',
                  username: '',
                  password: '',
                  confirmPassword: '',
                }}
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
                    <Button type="submit" className="mx-auto d-block">Crear cuenta</Button>
                  </Form>
                )}
              </Formik>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Registro;
