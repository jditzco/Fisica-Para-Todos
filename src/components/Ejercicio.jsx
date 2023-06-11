import { Button, Card } from 'react-bootstrap';

function Ejercicio({ titulo, descripcion, dificultad }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
          {descripcion} - {dificultad}
        </Card.Text>
        <Button variant="success">Ingresar</Button>
      </Card.Body>
    </Card>
  );
}

export default Ejercicio;