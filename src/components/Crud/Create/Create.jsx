import { useState } from "react";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
function Create({ stateLifting }) {
  const [name, setName] = useState();
  const changeHandler = (e) => {
    setName(e.target.value);
  };
  const handler = () => {
    if (name) {
      stateLifting(name);
      setName("");
    } else {
      alert("Enter a valid text");
    }
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Crate a todo"
        value={name}
        changeHandler={changeHandler}
      />
      <Button text="Create" handler={handler} />
    </div>
  );
}
export default Create;
