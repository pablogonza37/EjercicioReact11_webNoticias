import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import Titulo from "./Titulo";
import { useState } from "react";
import ListaNoticias from "./components/ListaNoticias";

function App() {

  const [category, setCategory] = useState('world');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <Titulo></Titulo>
      <Container className="mainPage">
        <Formulario onCategoryChange={handleCategoryChange}></Formulario>
        <ListaNoticias category={category}></ListaNoticias>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
