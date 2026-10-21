import { useState } from "react";
import "./App.css";

function App() {
  const [blob, setBlob] = useState(null);
  const [mensaje, setMensaje] = useState("Todavía no se creó ningún Blob.");
  const [resultadoSlice, setResultadoSlice] = useState("");

  const crearBlob = () => {
    const contenido =
      "Hola, este es un archivo de texto creado con un Blob en React.\n" +
      "Trabajo Práctico N°5 - Lenguajes IV - 2026.";
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
    <main className="pagina">
      <section className="tarjeta">
        <p className="etiqueta">Lenguajes IV · TP N°5</p>
        <h1>Ejemplo de uso de Blobs</h1>
        <p className="subtitulo">
          Crear, descargar y fragmentar un archivo de texto.
        </p>

        <div className="botones">
          <button className="btn btn-principal" onClick={crearBlob}>
            <span className="numero">1</span> Crear Blob de texto
          </button>
          <button
            className="btn"
            onClick={descargarBlob}
            disabled={!blob}
          >
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
  );
}

export default App;