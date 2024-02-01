import { Row, Col } from "react-bootstrap";
import ItemNoticia from "./ItemNoticia";

const ListaNoticias = () => {
  return (
    <div className="p-3">
      <Row className="d-flex justify-content-center">
        <Col md={4} className="mb-4">
          <ItemNoticia></ItemNoticia>
        </Col>
        <Col md={4} className="mb-4">
          <ItemNoticia></ItemNoticia>
        </Col>
        <Col md={4} className="mb-4">
          <ItemNoticia></ItemNoticia>
        </Col>
        <Col md={4} className="mb-4">
          <ItemNoticia></ItemNoticia>
        </Col>
      </Row>
    </div>
  );
};

export default ListaNoticias;
