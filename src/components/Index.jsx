import React, { useState } from "react";
import NumericKeyboard from "./NumericKeyboard";
import Header from "./Header";
import "../styles/numericKeyboard.css";

function Index() {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleClearClick = () => {
    setValue(value.slice(0, -1));
  };

  const handleEnterClick = () => {
    console.log(`Valor ingresado: ${value}`);
  };

  return (
    <div className="container">
      <Header />

    <h1>Bienvendio/a, ingresa tu código:</h1>

      <div className="row">
        <input
          className="input"
          type="text"
          value={value}
          onChange={handleInputChange}
        />
        <button className="btn btn-danger" onClick={handleClearClick}>
          Borrar
        </button>
      </div>
      <NumericKeyboard
        value={value}
        setValue={setValue}
        onEnterClick={handleEnterClick}
      />
    </div>
  );
}

export default Index;
