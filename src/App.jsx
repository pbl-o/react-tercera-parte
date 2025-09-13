import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";

/* 

Como aún no está indicado en las instrucciones el conectar los botones con las secciones de la app, coloqué temporariamente un "selector" para facilitar el observar los contenidos requeridos de forma aislada.
  
//Soluciones provisorias: 

App.jsx  
Cambiar el contenido de visible a 'home' para visualizar al componente home, 'register' para visualizar al componente register y 'login' para el componente login.

Login.jsx
Para el Login, el email "almacenado" es: 'email' y la contraseña: 'thepassword'

 */

function App() {
  let visible = "login";

  return (
    <>
      <MyNavbar />
      {visible === "home" && <Home />}
      {visible === "register" && <Register />}
      {visible === "login" && <Login />}
      {visible === "cart" && <Cart />}
      <Footer />
    </>
  );
}

export default App;
