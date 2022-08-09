import { useState } from "react";
import Button from "../Button/Button";
import Display from "../display/Display";
import Form from "../form/Form";
import Layout from "../Layout/Layouut";

function About() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState();

  const increCountHandler = () => {
    if (inputValue) {
      setCount(count + inputValue);
    } else {
      setCount("Please insert number");
    }
  };
  const decreCountHandler = () => {
    if (count > 0 && inputValue) {
      setCount(count - inputValue);
    } else if (inputValue < 0) {
      setCount("Please insert valid number");
    } else {
      setCount("Please insert number");
    }
  };

  const inputHandler = (e) => {
    setInputValue(parseInt(e.target.value));
  };

  return (
    <Layout>
      <h2>about page</h2>
      <Display point={count} />
      <Form changeHandler={inputHandler} value={inputValue} />
      <Button handler={increCountHandler} text="Increment" />
      <Button handler={decreCountHandler} text="Decrement" />
    </Layout>
  );
}
export default About;
