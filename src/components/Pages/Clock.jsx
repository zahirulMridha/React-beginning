import { useEffect, useState } from "react";
import Layout from "../Layout/Layouut";

function Clock() {
  const [time, setTime] = useState(new Date());
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  return (
    <Layout>
      {hours < 10 ? `0${hours}` : hours}:
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </Layout>
  );
}
export default Clock;
