import Header from "./Header.jsx";
import CardPizza from "./CardPizza.jsx";
import { pizzas } from "../utils/pizzas.js";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-3 my-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            description={pizza.desc}
            price={pizza.price}
            img={pizza.img}
            ingredients={pizza.ingredients.map((ing, index) => (
              <li className="list-group-item border-0" key={index}>
                🍕 {ing}
              </li>
            ))}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
