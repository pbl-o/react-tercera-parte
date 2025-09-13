import Card  from "react-bootstrap/Card";
import { useState } from "react";
import { pizzaCart } from "../utils/pizzas.js";
import MyButton from "./Button.jsx";
import conversor from "../utils/conversor.js";


const Cart = () => {
  // Set states to track price and selected items (already selected within the imported js file)
  // set the list to render & re-render as the imported js array
  const [pizzaInCart, setPizzasInCart] = useState(pizzaCart);
  // set the total as each pizzas prices * each pizza count
  const [total, setTotal] = useState(
    pizzaCart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0)
  );

  //set a Function to recalculate every time the Cart array is modified (+ 1 pizza, -1 pizza )
  const calculatePizzaAmt = (cart) => {
    cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);
  };

  //button mehtods:
  //creates a new array that modifies the object that fits the condition

  const addHAndler = (pizzaID) => {
    updatedListAdd = pizzaInCart.map((pizza) =>
      pizzaID === pizza.id ? { ...pizza, count: pizza.count + 1 } : pizza
    );

    //re-render pizza array:
    setPizzasInCart(updatedListAdd);
    //recalculate price with the list already updated
    setTotal(calculatePizzaAmt(updatedListAdd));
  };

  // in case of substraction (an additional filter is used to exclude pizzas with count = 0)
  const subsHandler = (pizzaID) => {
    updatedListLess = pizzaInCart
      .map((pizza) =>
        pizzaID === pizza.id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);

    //re-render pizza array:
    setPizzasInCart(updatedListLess);
    //recalculate price with the list already updated
    setTotal(calculatePizzaAmt(updatedListLess));
  };

  console.log(pizzaInCart);
  console.log(total);
  return (
    <>
      <div className="container-fluid p-2">
        <Card className="row g-5 m-5 p-5">

            {}

        </Card>
      </div>
    </>
  );
};

export default Cart;
