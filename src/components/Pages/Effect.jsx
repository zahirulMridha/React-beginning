import { useEffect, useState } from "react";
import Layout from "../Layout/Layouut";

function Effect() {
  const [state, setState] = useState("");
  useEffect(() => {
    console.log("useEffect");
    setTimeout(() => {
      console.log("timeOut");
      setState({ name: "Ashraful" });
    }, 5000);
  }, []);
  return (
    <Layout>
      {console.log("rendering")}
      <h1>who are you? {state.name ? state.name : "Guest"}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia
      </p>
    </Layout>
  );
}
export default Effect;
