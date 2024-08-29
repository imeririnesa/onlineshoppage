import { NavLink } from "react-router-dom";
import classes from "./Homepage.module.css";

function Homepage() {
  return (
    <ul className={`${classes.Homepage}`}>
      <li className={classes["women-wear"]}>
        <NavLink to="/women">
          <img src="https://static.pullandbear.net/2/static2/itxwebstandard/responsive/genderselector/woman.jpg?20240814022206" />
          <span>Women</span>
        </NavLink>
      </li>
      <li className={classes["men-wear"]}>
        <NavLink to="/men">
          <img src="https://static.pullandbear.net/2/static2/itxwebstandard/responsive/genderselector/man.jpg?20240814022206" />
          <span>Men</span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Homepage;
