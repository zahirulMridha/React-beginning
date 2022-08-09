import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import classes from "./layout.module.css"

function Layout(props) {
  return (
    <div>
      <Nav />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
