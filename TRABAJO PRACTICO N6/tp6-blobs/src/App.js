import { useState } from "react";
import "./App.css";

function App() {
  const [blob, setBlob] = useState(null);
  const [mensaje, setMensaje] = useState("Todavía no se creó ningún Blob.");
  const [resultadoSlice, setResultadoSlice] = useState("");

  const crearBlob = () => {
    const contenido =
      "Hola, este es un archivo de texto creado con un Blob en React.\n" +
      "Trabajo Práctico N°6 - Lenguajes IV - 2026.";
    const nuevoBlob = new Blob([contenido], { type: "text/plain" });

    setBlob(nuevoBlob);
    setResultadoSlice("");
    setMensaje(
      `Blob creado · tipo: ${nuevoBlob.type} · tamaño: ${nuevoBlob.size} bytes`
    );
  };

  const descargarBlob = () => {
    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "archivo.txt";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    URL.revokeObjectURL(url);

    setMensaje("Blob descargado como archivo.txt");
  };

  const usarSlice = async () => {
    if (!blob) return;

    const parte = blob.slice(0, 10, "text/plain");
    const texto = await parte.text();

    setMensaje(`slice(0, 10) · fragmento de ${parte.size} bytes`);
    setResultadoSlice(texto);
  };

  return (
    <div className="app" id="inicio">
      <header className="header">
        <div className="header-contenido">
          <a href="#inicio" className="marca">
            <span className="marca-icono">B</span>
            <span className="marca-texto">
              Blobs<span className="logo-punto">.</span>
            </span>
          </a>

          <nav className="nav">
            <a href="#inicio">Inicio</a>
            <a href="#ejemplo">Ejemplo</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <span className="header-etiqueta">TP N°6</span>
        </div>
      </header>

      <main className="pagina">
        <section className="tarjeta" id="ejemplo">
          <p className="etiqueta">Lenguajes IV · TP N°6</p>
          <h1>Ejemplo de uso de Blobs</h1>
          <p className="subtitulo">
            Crear, descargar y fragmentar un archivo de texto.
          </p>

          <div className="botones">
            <button className="btn btn-principal" onClick={crearBlob}>
              <span className="numero">1</span> Crear Blob de texto
            </button>
            <button className="btn" onClick={descargarBlob} disabled={!blob}>
              <span className="numero">2</span> Descargar Blob
            </button>
            <button className="btn" onClick={usarSlice} disabled={!blob}>
              <span className="numero">3</span> Usar slice()
            </button>
          </div>

          <div className="estado">
            <span className={`punto ${blob ? "activo" : ""}`}></span>
            <p>{mensaje}</p>
          </div>

          {resultadoSlice && (
            <div className="resultado">
              <span className="resultado-titulo">Fragmento obtenido</span>
              <pre>{resultadoSlice}</pre>
            </div>
          )}
        </section>
      </main>

      <footer className="footer" id="contacto">
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
            <p>Trabajo Práctico N°6</p>
            <p>React · JavaScript · Blob API</p>
          </div>

          <div className="footer-columna">
            <h3>Navegación</h3>
            <a href="#inicio">Inicio</a>
            <a href="#ejemplo">Ejemplo</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>

        <div className="footer-inferior">
          <p>© 2026 Universidad Católica de Salta. Todos los derechos reservados.</p>
          <p>Hecho con React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;