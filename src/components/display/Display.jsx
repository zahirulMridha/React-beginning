import classes from "./display.module.css";
function Display(props) {
  return <h3 className={classes.display}>{props.point}</h3>;
}
export default Display;