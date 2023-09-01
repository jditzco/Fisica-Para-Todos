import { Button, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import NavBar from '../components/NavBar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import * as formik from 'formik';
import * as yup from 'yup';

function Registro() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
    });

    return (
        <>
            <NavBar />
            <Container className='card-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='/img/logo.png' />
                    <Card.Body>
                        <Card.Text>
                            <Formik
                                validationSchema={schema}
                                onSubmit={console.log}
                                initialValues={{
                                    username: '',
                                    password: '',
                                }}
                            >
                                {({ handleSubmit, handleChange, values, touched, errors }) => (
                                    <Form noValidate onSubmit={handleSubmit}>

                                        <Form.Group
                                            as={Col}
                                            md="4"
                                            controlId="validationFormik101"
                                            className="position-relative"
                                        >
                                            <Form.Label>Usuario</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                value={values.username}
                                                onChange={handleChange}
                                                isValid={touched.username && !errors.username}
                                            />
                                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            md="4"
                                            controlId="validationFormik102"
                                            className="position-relative"
                                        >
                                            <Form.Label>Contraseña</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                isValid={touched.password && !errors.password}
                                            />

                                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <br />
                                        <Button type="submit">Submit form</Button>
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

export default Registro