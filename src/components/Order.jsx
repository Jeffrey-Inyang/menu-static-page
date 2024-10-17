import React from "react";

function Order({ closeHr, openHr }) {
  return (
    <div className="order">
      <p>
        We're open from {openHr}:00 to {closeHr}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
