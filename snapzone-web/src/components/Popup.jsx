import React, { useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="popup">
        <div className="popup-content">
          <div className="popup-header">
            <h2>Snapzone Frames</h2>
          </div>
          <div className="popup-body">
            <p>Hello Snapzone Frames customer!</p>
            <p>Our website is under maintenance. Please wait for a few hours.</p>
            <p>Thank you for your patience.</p>
            <p>Keep supporting us!</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="close-popup-btn"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;
