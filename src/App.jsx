import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import Titulo from "./components/Titulo";
import { useState } from "react";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  const [categoria, setCategoria] = useState("world");

  const handleCategoryChange = (newCategoria) => {
    setCategoria(newCategoria);
  };

  return (
    <>
      <Titulo></Titulo>
      <Container className="mainPage">
        <Formulario onCategoryChange={handleCategoryChange}></Formulario>
        <ListaNoticias categoria={categoria}></ListaNoticias>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
