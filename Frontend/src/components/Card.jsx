import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sandwich from "../assets/sandwich1.png"

function BasicExample() {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={sandwich} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;