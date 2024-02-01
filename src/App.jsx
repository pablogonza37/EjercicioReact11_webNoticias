import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioNoticias from "./components/FormularioNoticias";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <h1 className="display-1 text-center text-bg-dark py-3">Noticias</h1>
      <Container className="mainPage">
        <FormularioNoticias></FormularioNoticias>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
