import { Form } from "react-bootstrap";


const Formulario = ({ onCategoryChange }) => {
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    onCategoryChange(newCategory);
  };

  return (
    <section className="mt-4 ">
      <Form className="p-4 text-bg-secondary rounded">
        <Form.Group
          className="mb-3 d-flex justify-content-around "
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Buscar por categoria:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="w-75"
            onChange={handleCategoryChange}
          >
            <option value="world">General</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </section>
  );
};

export default Formulario;
