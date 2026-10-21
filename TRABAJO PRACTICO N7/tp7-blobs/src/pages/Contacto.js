import { useState } from "react";
import "./Paginas.css";

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  return (
    <section className="pagina-texto">
      <p className="etiqueta">Contacto</p>
      <h1>Escribinos</h1>
      <p className="lead">
        Completá el formulario y nos pondremos en contacto con vos.
      </p>

      <form className="formulario" onSubmit={manejarEnvio}>
        <label>
          Nombre
          <input type="text" placeholder="Tu nombre" required />
        </label>

        <label>
          Correo electrónico
          <input type="email" placeholder="tucorreo@ejemplo.com" required />
        </label>

        <label>
          Mensaje
          <textarea rows="4" placeholder="Escribí tu mensaje" required />
        </label>

        <button type="submit" className="boton-enlace">
          Enviar mensaje
        </button>

        {enviado && (
          <p className="exito">¡Gracias! Tu mensaje fue enviado.</p>
        )}
      </form>
    </section>
  );
}

export default Contacto;