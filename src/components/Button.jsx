import Button from "react-bootstrap/Button";

const MyButton = (props) => {
  return (
    <Button variant={props.btnColor} onClick={props.onClick}>
      {props.btnText}
    </Button>
  );
};

export default MyButton;
