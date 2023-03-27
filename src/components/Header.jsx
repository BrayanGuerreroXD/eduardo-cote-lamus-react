import React from "react";
import "../styles/header.css";

function Header() {
  const hideText = window.innerWidth < 1000;
  return (
    <header className="header">
      <h1 className={hideText ? "hide-text" : ""}>
        Sistema de Asistencia a la Biblioteca
      </h1>
    </header>
  );
}

export default Header;