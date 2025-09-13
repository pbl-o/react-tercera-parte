import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import MyButton from "./Button.jsx";
import conversor from "../utils/conversor.js";

const CardPizza = ({ name, img, price, ingredients, description }) => {
  return (
    <>
      <div className="col">
        <Card className="text-center">
          <Card.Img variant="top" src={img} className="" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Detalle</Accordion.Header>
                  <Accordion.Body>{description}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </ListGroup.Item>

            <ListGroup.Item>
              <Card.Text className="fw-bolder">Ingredientes</Card.Text>
              <Card.Text>{ingredients}</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text className="fw-bolder">{conversor(price)}</Card.Text>
              <Card.Body>
                <div className=" d-flex justify-content-around">
                  <MyButton btnText="Ver Más" btnColor="light" />
                  <MyButton btnText="Añadir" btnColor="dark" />
                </div>
              </Card.Body>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default CardPizza;
