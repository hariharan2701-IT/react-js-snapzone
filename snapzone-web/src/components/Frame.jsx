import React from "react";

const Frame = ({ frame }) => (
  <div className="frame">
    <img src={frame.image} alt={`${frame.size} frame`} />
    <h3>{frame.size}</h3>
    <p>Colors: {frame.colors.join(" | ")}</p>
    <p>Price: ₹{frame.price}</p>
    <button className="order-now-btn">
      <i className="bi bi-cart"></i> Order Now
    </button>
  </div>
);

export default Frame;