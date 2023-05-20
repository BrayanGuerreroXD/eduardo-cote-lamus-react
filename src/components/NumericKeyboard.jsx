import React from "react";
import "../styles/numericKeyboard.css";

function NumericKeyboard({ value, setValue, onEnterClick, onClearClick }) {
  const handleButtonClick = (event) => {
    const buttonValue = event.target.textContent;
    if (buttonValue === "Ingresar") {
      onEnterClick();
    } else if (buttonValue === "Borrar") {
      onClearClick();
    } else {
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
            style={{ fontSize: "3vh" }}
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="2"
            style={{ fontSize: "3vh" }}
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="3"
            style={{ fontSize: "3vh" }}
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
            style={{ fontSize: "3vh" }}
          >
            4
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="5"
            style={{ fontSize: "3vh" }}
          >
            5
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="6"
            style={{ fontSize: "3vh" }}
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
            style={{ fontSize: "3vh" }}
          >
            7
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="8"
            style={{ fontSize: "3vh" }}
          >
            8
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="9"
            style={{ fontSize: "3vh" }}
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
            style={{ fontSize: "3vh" }}
          >
            Borrar
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleButtonClick}
            value="0"
            style={{ fontSize: "3vh" }}
          >
            0
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleButtonClick}
            style={{ fontSize: "3vh" }}
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumericKeyboard;
