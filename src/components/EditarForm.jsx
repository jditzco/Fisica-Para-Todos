import {Card} from 'react-bootstrap';

function EditarForm() {
  return (
    <Card className='carta'>
      <Card.Body>
        <Card.Title className='titulo'>Edita tu perfil</Card.Title>
        <Card.Text className='descripcion'>
        Foto
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EditarForm;