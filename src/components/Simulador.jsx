import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Simulador({ titulo, descripcion, dificultad }) {
  return (
    <Card className='card-simulador'>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion}<br />
        </Card.Text>
        <Button variant="success"><Link to={'/'} className='link'>Ingresar</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default Simulador;