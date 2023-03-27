import React, { useState } from "react";
import NumericKeyboard from "./NumericKeyboard";
import Header from "./Header";
import "../styles/numericKeyboard.css";
import "../styles/footer.css";

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

      <h1 className="h1">Bienvendio/a, ingresa tu código:</h1>

      <div className="row">
        <div className="col">
          <input
            className="form-control"
            type="text"
            value={value}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <NumericKeyboard
        value={value}
        setValue={setValue}
        onEnterClick={handleEnterClick}
        onClearClick={handleClearClick}
      />

      <footer>
        <div id="signature">
          <p className="h5">
            <em>designed by FABLAB UFPS</em>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Index;
