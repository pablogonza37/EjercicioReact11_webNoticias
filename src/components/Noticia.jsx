import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Noticia = ({item}) => {
  return (
    <Card className='shadow'>
        <Card.Img variant="top" src={item.image_url} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <a href={item.url}><Button variant="primary">ver mas</Button></a>
      </Card.Body>
    </Card>
  );
};

export default Noticia;
