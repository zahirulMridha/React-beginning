import classes from "./form.module.css";
function Form(props) {
  return (
    <input
      className={classes.form}
      type="number"
      value={props.value}
      onChange={props.changeHandler}
    />
  );
}
export default Form;
