import React from "react";
import "./Popular.css";
import Mushroom from "../../assets/mushroom_pizza.jpg";
import Cheese from "../../assets/cheese_pizza.jpg";
import Veggie from "../../assets/veggie_pizza.jpg";
import Pizza from "../Pizza/Pizza";

const Popular = () => {
  let pizzas = [
    {id: 0, name: "Mushroom pizza", description: "filled with mushrooms", img: Mushroom, price: 12.5 },
    {id: 1, name: "Cheese pizza", description: "filled with cheese", img: Cheese, price: 14.99 },
    {id: 2, name: "Veggie pizza", description: "filled with vegetables", img: Veggie, price: 8.99 },
  ];

  return (
    <div class="bg-black">
      <header class=" pt-5 h-2xs w-full border-t-4 border-marinara  text-white flex items-center justify-center ">
        <h1 class="text-4xl p-3">Popular</h1>
      </header>
      <div class="flex flex-wrap p-5 justify-center items-center">
          {pizzas.map(pizza => 
            (<Pizza
                id={pizza.id}
                name={pizza.name}
                description={pizza.description}
                img={pizza.img}
                price={pizza.price}
            />)
            )}
      </div>
    </div>
  );
};

export default Popular;
