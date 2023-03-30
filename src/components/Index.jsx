import React, { useState } from "react";
import NumericKeyboard from "./NumericKeyboard";
import Header from "./Header";
import Modal from "./Modal";
import Overlay from "./Overlay";

import userExists from "../api/registerUser";

import "../styles/numericKeyboard.css";
import "../styles/footer.css";

function Index() {
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleClearClick = () => {
    setValue(value.slice(0, -1));
  };

  const handleEnterClick = async () => {
    try {
      const userExistsResult = await userExists(value);
      
      if (userExistsResult) {
        console.log('The user exists');
        setValue('');
        setVerified(true);
        setShowModal(true);
      } else {
        console.log('The user does not exist');
      }
    } catch (error) {
      console.log(`Error checking user existence: ${error.message}`);
    }
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

      <Overlay isVisible={showModal} />
      <Modal showModal={showModal}/>

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
