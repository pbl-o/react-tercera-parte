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

        console.log('plus1')
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

    console.log('minus 1')
  };

/*   console.log(pizzaInCart);
  console.log(total); */
  return (
    <>
      <div className="container-fluid d-flex">
        <Card className="row mx-auto">

            {
            
            pizzaInCart.map((pizza) => {
                return(
                    <div className="col d-flex justify-content-around align-items-center gap-5" key={pizza.id}>
                        <div className="py- d-flex gap-3 fs-5 fw-bolder">
                            <img style={{ width: "20%",  borderRadius: "5px" }} src={pizza.img} alt={pizza.desc} />
                          <p className="text-capitalize bg-success">{pizza.name}</p>
                        </div>

                       

                       
                       
                        <p>{conversor(pizza.price)}</p>
                       


                        <div className="d-flex gap-5 mx-auto">
                              <MyButton btnColor='primary' btnText='-' onClick={()=>{subsHandler(pizza.id)}}/>
                             <p>{pizza.count}</p>
                            <MyButton btnColor='danger' btnText='+' onClick={()=>{addHandler(pizza.id)}}/>
                           
                          
                        </div>
                    </div>
                )
            })
            
            }

            <div className="text-center">
                <h3>Total</h3>
                <p>{conversor(total)}</p>
                <MyButton btnColor='dark'btnText='Pagar'/>
            </div>

        </Card>
      </div>
    </>
  );
};

export default Cart;
