import Card from "react-bootstrap/Card";
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
    return cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);
  };

  //button mehtods:
  //creates a new array that modifies the object that fits the condition

  const addHandler = (pizzaID) => {
    const updatedListAdd = pizzaInCart.map((pizza) =>
      pizzaID === pizza.id ? { ...pizza, count: pizza.count + 1 } : pizza
    );

    //re-render pizza array:
    setPizzasInCart(updatedListAdd);
    //recalculate price with the list already updated
    setTotal(calculatePizzaAmt(updatedListAdd));

    console.log("plus1");
  };

  // in case of substraction (an additional filter is used to exclude pizzas with count = 0)
  const subsHandler = (pizzaID) => {
    const updatedListLess = pizzaInCart
      .map((pizza) =>
        pizzaID === pizza.id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);

    //re-render pizza array:
    setPizzasInCart(updatedListLess);
    //recalculate price with the list already updated
    setTotal(calculatePizzaAmt(updatedListLess));

    console.log("minus 1");
  };

  /*   console.log(pizzaInCart);
  console.log(total); */
  return (
    <>
      <div className="container-fluid d-flex align-items-center">
        <Card className="mx-auto m-3">
          {pizzaInCart.map((pizza) => {
            return (
              <div className="row fw-bolder m-3" key={pizza.id}>
                <div className="col-3">
                  <img
                    className="rounded w-100"
                    src={pizza.img}
                    alt={pizza.desc}
                  />
                </div>

                <div className="col-6 d-flex justify-content-evenly align-items-center p-3 ">
                  <p className=" text-capitalize ">{pizza.name}</p>
                  <p>{conversor(pizza.price)}</p>
                </div>

                <div className="d-flex justify-content-evenly align-items-center gap-2 col-3 mx-auto">
                  <MyButton
                    btnColor="primary"
                    btnText="-"
                    onClick={() => {
                      subsHandler(pizza.id);
                    }}
                  />
                  <p className="my-3">{pizza.count} </p>
                  <MyButton
                    btnColor="danger"
                    btnText="+"
                    onClick={() => {
                      addHandler(pizza.id);
                    }}
                  />
                </div>
              </div>
            );
          })}
          <hr className="m-4" />
          <div className="text-center m-3">
            <h3>Total</h3>
            <p>{conversor(total)}</p>
            <MyButton btnColor="dark" btnText="Pagar" />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Cart;
