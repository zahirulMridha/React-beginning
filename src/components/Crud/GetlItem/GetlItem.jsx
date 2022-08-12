import { useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import classes from "./getitem.module.css";

function GetlItem({ lifting, placeholder, text }) {
  const [id, setId] = useState();
  const getId = (e) => {
    setId(e.target.value);
  };
  // work in "onclick"
  const handler = () => {
    if (id) {
      lifting(id);
      setId("");
    } else {
      alert("Enter a valid id");
    }
  };
  return (
    <div className={classes.get}>
      <div className={classes.input}>
        <Input value={id} changeHandler={getId} placeholder={placeholder} />
      </div>
      <div className={classes.btn}>
        <Button handler={handler} text={text} />
      </div>
    </div>
  );
}
export default GetlItem;
