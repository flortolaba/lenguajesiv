import "./Paginas.css";

function AcercaDe() {
  return (
    <section className="pagina-texto">
      <p className="etiqueta">Acerca de nosotros</p>
      <h1>Sobre este trabajo</h1>
      <p className="lead">
        Este proyecto fue desarrollado para la cátedra Lenguaje IV de la
        carrera Ingeniería en Informática de la Universidad Católica de Salta.
      </p>

      <div className="grilla-tarjetas">
        <article className="mini-tarjeta">
          <h3>Blob</h3>
          <p>
            Objeto que representa datos binarios o de texto, usado para crear
            archivos desde el navegador.
          </p>
        </article>
        <article className="mini-tarjeta">
          <h3>React Router</h3>
          <p>
            Permite navegar entre páginas sin recargar el sitio, usando rutas
            definidas con Route.
          </p>
        </article>
        <article className="mini-tarjeta">
          <h3>Estilos</h3>
          <p>
            Cada componente tiene su propia hoja de estilos CSS para mantener
            el diseño ordenado.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AcercaDe;