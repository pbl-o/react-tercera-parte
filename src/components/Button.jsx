import Button from "react-bootstrap/Button";

const MyButton = (props) => {
  return <Button variant={props.btnColor}>{props.btnText}</Button>;
};

export default MyButton;
