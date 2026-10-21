function Header() {
  return (
    <header className="header">
      <div className="header-contenido">
        <span className="logo">Blobs<span className="logo-punto">.</span></span>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#ejemplo">Ejemplo</a>
          <a href="#acerca">Acerca de</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;