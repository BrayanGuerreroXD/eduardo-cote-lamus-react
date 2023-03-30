import React from "react";

function Modal({ showModal, setShowModal }) {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 101,
        display: showModal ? "block" : "none",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            hahaha
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
