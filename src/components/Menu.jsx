import React from "react";
import { pizzaData } from "./data";
import Pizza from "./Pizza";
import "./menu.css";
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>The Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            We serve the best pizza in town. All organic and rich in flavour and
            nutrients
          </p>

          <ul className="pizzas">
            {pizzas.map((piz) => (
              <Pizza
                pizzaObj={piz}
                key={piz.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>Menu will soon be avaliable. Please bear with us</p>
      )}
    </main>
  );
}

export default Menu;
