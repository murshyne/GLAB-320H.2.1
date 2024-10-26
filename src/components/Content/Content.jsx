import App from "../../App";

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);

}

export default Content;