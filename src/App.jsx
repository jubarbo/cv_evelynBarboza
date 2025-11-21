import { useState } from "react";
import imgCv from "../public/img/imgCv.jpg";
import Card from "../src/components/Card/Card";
import "./App.css";
import CardPresentacion from "./components/CardPresentacion/CardPresentacion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={imgCv} className="mifoto" alt="mifoto" />
      </div>

      <div>
        <h1>Evelyn Barboza</h1>
        <h4>Programadora, Analista Genexus Jr</h4>
      </div>
      <div className="contenedorCardPresentacion">
        <CardPresentacion
          tituloP="Objetivo"
          textCardP="model text, and a search for lorem ipsum will uncover many web sites still in t orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15er many web sites still in t"
        ></CardPresentacion>
      </div>
      <div className="cards-container">
        <div className="contenedorCard">
          <Card
            titulo="Formación Académica"
            textCard="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 15er many web sites still in t"
            txtBtn="Ver más..."
          ></Card>
        </div>
        <div className="contenedorCard">
          <Card
            titulo="Experiencias Laborales"
            textCard="model text, and a search for lorem ipsum will uncover many web sites still in t"
            txtBtn="Ver mucho más..."
          ></Card>
        </div>
      </div>
      <div className="cards-container">
        <div className="contenedorCard">
          <Card
            titulo="Proyectos Personales"
            textCard=""
            txtBtn="Ver mucho mucho más..."
          ></Card>
        </div>
        <div className="contenedorCard">
          <Card
            titulo="Experiencias Laborales"
            textCard="model text, and a search for lorem ipsum will uncover many web sites still in t"
            txtBtn="Ver super mucho más..."
          >
            <h2>
              Fijate como acá tengo esta etiqueta que recibo como children,
              puedo tener más cosas, incluso otros componentes.{" "}
            </h2>
          </Card>
        </div>
      </div>
      <div className="contenedorCardPresentacion">
        <CardPresentacion
          tituloP="Contacto"
          textCardP="Loggo whatsap, Logo Linkedin, gmail, y ta"
        ></CardPresentacion>
      </div>
      <p className="read-the-docs">Click on the photo</p>
    </>
  );
}

export default App;
