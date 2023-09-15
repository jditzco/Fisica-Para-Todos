import {Card} from 'react-bootstrap';
import './LoginForm';
import './Avatar.css'

function Avatar() {
  return (
    <Card className='carta'>
      <Card.Body>
        <Card.Title className='titulo'>Usuario</Card.Title>
        <Card.Text className='descripcion'>
          Alumno/a
          <br /><br /><br />
          Ejercicios resueltos: 10
          <br /><br />
          Estrellas: 7
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Avatar;