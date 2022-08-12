import classes from "./form.module.css";
function Input(props) {
  return (
    <input
      className={classes.form}
      type={props.type}
      value={props.value}
      onChange={props.changeHandler}
      placeholder={props.placeholder}
    />
  );
}
export default Input;
