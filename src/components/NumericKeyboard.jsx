import React from "react";
import "../styles/numericKeyboard.css";

function NumericKeyboard({ value, setValue, onEnterClick, onClearClick }) {
  const handleButtonClick = (event) => {
    const buttonValue = event.target.textContent;
    if (buttonValue === "Ingresar") {
      onEnterClick();
    } else if (buttonValue === "Borrar"){
      onClearClick();
    }else {
      setValue(value + buttonValue);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="1"
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="2"
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="3"
          >
            3
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="4"
          >
            4
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="5"
          >
            5
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="6"
          >
            6
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="7"
          >
            7
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="8"
          >
            8
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="9"
          >
            9
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleButtonClick}
          >
            Borrar
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="0"
          >
            0
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleButtonClick}
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumericKeyboard;
