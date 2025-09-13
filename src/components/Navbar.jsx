import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import conversor from "../utils/conversor.js";

/*Observaciones

Ya que estoy exportando un componente boostrap que ya se llama 
preferí llamar diferenciar mi componente para evitar posibles confusiones

Preferí mantener el link del Navbar de bootstrap en por sobre los botones para aprovechar el componente, dado que 
El objetivo del punto 4 es que las opciones Home y Total (sea botón o no) se mantengan tal cual son independiente
del token

*/

const MyNavbar = () => {
  const total = 25000;
  const token = false;
  return (
    <Navbar
      expand="lg"
      className="bg-dark w-100 d-flex justify-content-between "
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#home">Pizzería Ticcino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <div className="d-flex flex-column flex-lg-row">
              <Nav.Link href="#home">🍕Home</Nav.Link>
              <Nav.Link href="#link">{token ? "🔐Logout" : "🔐Login"}</Nav.Link>
              <Nav.Link href="#link">
                {token ? "🔐Profile" : "🔐Register"}
              </Nav.Link>
            </div>

            <div className="ms-auto">
              <Nav.Link> 🛒 Total: {conversor(total)}</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
