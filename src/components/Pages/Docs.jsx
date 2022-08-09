import { useState } from "react";
import Button from "../Button/Button";
import Display from "../display/Display";
import Layout from "../Layout/Layouut";

function Docs() {
  const [point, setPoint] = useState(0);
  const sum = () => {
    setPoint(point + 1);
  };
  const min = () => {
    setPoint(point - 1);
  };
  return (
    <Layout>
      <h3>Documentation page</h3>
      <Display point={point} />
      <Button handler={sum} text="Click for Increment " />
      <Button handler={min} text="Click for Dencrement " />
    </Layout>
  );
}
export default Docs;
