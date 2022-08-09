import classes from "./footer.module.css";
function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.listItems}>
        <li>facebook</li>
        <li>instragram</li>
        <li>twitter</li>
      </ul>
    </footer>
  );
}

export default Footer;
