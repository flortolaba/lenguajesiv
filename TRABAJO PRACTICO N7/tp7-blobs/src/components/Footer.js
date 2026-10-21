import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-columna">
          <h3>Universidad Católica de Salta</h3>
          <p>Ingeniería en Informática</p>
          <p>Cátedra: Lenguaje IV · 2026</p>
        </div>

        <div className="footer-columna">
          <h3>Docentes</h3>
          <p>Ing. Nancy Lucero</p>
          <p>Ing. Alejandro Delgado</p>
        </div>

        <div className="footer-columna">
          <h3>Proyecto</h3>
          <p>Trabajo Práctico N°7</p>
          <p>React · Router · Blob API</p>
        </div>

        <div className="footer-columna">
          <h3>Navegación</h3>
          <Link to="/">Inicio</Link>
          <Link to="/proyecto-blob">Proyecto Blob</Link>
          <Link to="/acerca-de-nosotros">Acerca de nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </div>

      <div className="footer-inferior">
        <p>© 2026 Universidad Católica de Salta. Todos los derechos reservados.</p>
        <p>Hecho con React</p>
      </div>
    </footer>
  );
}

export default Footer;