import { Link } from "react-router-dom";
import classes from "./nav.module.css";
function Nav() {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.brand}>company brand</h1>
      <ul className={classes.listItems}>
        <li>
          <Link className={classes.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={classes.link} to="/docs">
            Docs
          </Link>
        </li>
        <li>
          <Link className={classes.link} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={classes.link} to="/effect">
            Effect
          </Link>
        </li>
        <li>
          <Link className={classes.link} to="/clock">
            Clock
          </Link>
        </li>
        <li>
          <Link className={classes.link} to="/crud">
            Crud
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
