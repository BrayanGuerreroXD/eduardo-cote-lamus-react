import React, { useState } from "react";
import NumericKeyboard from "./NumericKeyboard";
import Header from "./Header";
import QR from "./QR";
import Swal from "sweetalert2";

import userExistsaApi from "../api/userExists";

import "../styles/numericKeyboard.css";
import "../styles/footer.css";
import "../styles/swal.css";

function Index() {
  const [value, setValue] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleClearClick = () => {
    setValue(value.slice(0, -1));
  };

  // Click on enter button to check if user exists and register it
  const handleEnterClick = async () => {
    try {
      const { userExists, user_name, user_lastname } = await userExistsaApi(
        value
      );
      let title = "";
      let text = "";

      if (userExists) {
        title = "Bienvenido/a";
        text = `${user_name} ${user_lastname}`;
      } else {
        // User does not exist
        title = "Error";
        text = "El usuario no existe";
        // Show QR code
        setShowQR(true);
      }

      // Clear input
      setValue("");

      Swal.fire({
        icon: userExists ? "success" : "error",
        title: title,
        text: text,
        customClass: "swal-wide",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      console.log(`Error checking user existence: ${error.message}`);
    }
  };

  // Show QR code or Register View
  const showContent = (showQR) => {
    // Content to show
    let content = null;

    if (showQR) {
      // Show QR code and button to register
      content = (
        <div>
          <QR />
          <button
            type="button"
            className="btn btn-danger w-50"
            onClick={() => setShowQR(false)}
            style={{ fontSize: "3vh" }}
          >
            Realizar registro
          </button>
        </div>
      );
    } else {
      // Show register view
      content = (
        <div>
          <h1 style={{ fontSize: "3vh", padding: "10px" }}>
            Bienvenido/a, ingresa tu código:
          </h1>
          <div className="row">
            <div className="col">
              <input
                className="form-control"
                type="text"
                value={value}
                onChange={handleInputChange}
                style={{ fontSize: "3vh" }}
              />
            </div>
          </div>
          <NumericKeyboard
            value={value}
            setValue={setValue}
            onEnterClick={handleEnterClick}
            onClearClick={handleClearClick}
          />
        </div>
      );
    }
    return content;
  };

  return (
    <div className="container">
      <Header />
      {showContent(showQR)}
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
