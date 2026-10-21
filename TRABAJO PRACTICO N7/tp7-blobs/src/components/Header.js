import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-contenido">
        <NavLink to="/" className="marca">
          <span className="marca-icono">B</span>
          <span className="marca-texto">
            Blobs<span className="logo-punto">.</span>
          </span>
        </NavLink>

        <nav className="nav">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/proyecto-blob">Proyecto Blob</NavLink>
          <NavLink to="/acerca-de-nosotros">Acerca de nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

