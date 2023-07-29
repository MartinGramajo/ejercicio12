import { useEffect, useState } from "react";
import "./App.css";
import Titulo from "./components/Titulo";
import ListaNoticias from "./components/ListaNoticias";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";

function App() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_26807d055cc63d04745a09599882a3e24adc3&language=es`
      );

      const dato = await respuesta.json();

      setNoticias(dato.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <Titulo />
      <Formulario />
      <ListaNoticias noticias={noticias} />
      <Footer />
    </div>
  );
}

export default App;
