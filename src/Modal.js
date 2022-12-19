import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modelContainer">
        <button onClick={() => closeModal(false)}>X</button>
        <div className="title">
          <h1>This is the modal header</h1>
        </div>
        <div className="body">
          <p>
            This is some text that sits in the body. Sign up to Leslie's class
            today.
          </p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
