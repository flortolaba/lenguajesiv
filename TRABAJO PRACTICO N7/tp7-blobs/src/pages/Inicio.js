import { Link } from "react-router-dom";
import "./Paginas.css";

function Inicio() {
  return (
    <section className="pagina-texto centrado">
      <p className="etiqueta">Lenguaje IV · TP N°7</p>
      <h1>Bienvenido al proyecto de Blobs</h1>
      <p className="lead">
        Una aplicación hecha con React que muestra cómo crear un archivo de
        texto con un Blob, descargarlo en tu PC y obtener un fragmento con
        slice().
      </p>

      <Link to="/proyecto-blob" className="boton-enlace">
        Ir al proyecto
      </Link>
    </section>
  );
}

export default Inicio;