import { Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticias = () => {
    return (
        <section className="mt-4">
          <Form className="p-4">
          <Form.Group
            className="mb-3 d-flex justify-content-around"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Select aria-label="Default select example" className="w-75">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Form>  
        <ListaNoticias></ListaNoticias>
        </section>
    );
};

export default FormularioNoticias;