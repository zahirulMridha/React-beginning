import { useState } from "react";
import Button from "../../Button/Button";
import classes from "./read.module.css";
function Read({ data, text, btn }) {
  const [track, setTrack] = useState();
  const [com, setCom] = useState();
  const handler = () => {
    if (!track) {
      setTrack("active");
      console.log(data);
      if (!data.length) {
        setCom("There is no data");
      } else {
        setCom(null);
      }
    } else {
      setTrack("");
    }
  };
  return (
    <div className={classes.read}>
      <Button handler={handler} text={btn} />
      <ul className={classes.list}>
        {track ? (
          com ??
          data.map((v) => {
            return <li key={v.id}>{v.name}</li>;
          })
        ) : (
          <p>{text}</p>
        )}
      </ul>
    </div>
  );
}
export default Read;
