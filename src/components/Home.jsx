import Header from "./Header.jsx";
import CardPizza from "./CardPizza.jsx";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container-fluid row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-3 my-4">
        <CardPizza
          name="Napolitana"
          price={5950}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"
          ingredients="🍕 mozzarella, tomates, jamón, orégano"
        />
        <CardPizza
          name="Española"
          price={6950}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
          ingredients="🍕 mozzarella, gorngonzola, parmesano, provolone"
        />
        <CardPizza
          name="Pepperoni"
          price={7950}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
          ingredients="🍕 mozzarella, peperoni, orégano"
        />
      </div>
    </>
  );
};

export default Home;
