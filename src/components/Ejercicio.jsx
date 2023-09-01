import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Ejercicio({ idEj, titulo, descripcion, dificultad }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}<br />
          Dificultad: {dificultad}
        </Card.Text>
        <Button variant="success"><Link to={'/ejercicio/' + idEj} className='link'>Ingresar</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Ejercicio;