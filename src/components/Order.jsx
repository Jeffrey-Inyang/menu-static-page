import React from "react";

function Order({ closeHr, openHr }) {
  const closed = 22;
  return (
    <div className="order">
      <p>
        We're open from {openHr}:00 to {closeHr}:00. Come visit us or order
        online.
      </p>
      <button className={`btn ${closeHr >= closed ? "btnDisabled" : ""}`}>
        Order
      </button>
    </div>
  );
}

export default Order;
