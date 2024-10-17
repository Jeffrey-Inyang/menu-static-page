import React from "react";
import Order from "./Order";

function Footer() {
  const hr = new Date().getHours();
  const openHr = 8;
  const closeHr = 22;
  const isOpen = hr >= openHr && hr <= closeHr;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order
          closeHr={closeHr}
          openHr={openHr}
        />
      ) : (
        <p>
          We will gladly attend to you between {openHr}:00 and {closeHr}:00
        </p>
      )}
    </footer>
  );
}

export default Footer;
