import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <h1 className="logo">TNZ</h1>
      <div className={classes.socials}>
        <a href="#insta">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#tiktok">
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a href="#youtube">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="#linkedin">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <ul className={classes.quickLinks}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        {/* <li>
          <NavLink to="/about">About us</NavLink>
        </li> */}
        <li>
          <NavLink to="/terms-of-service">Terms of service</NavLink>
        </li>
        <li>
          <NavLink to="/shipping-and-returns">Shipping-and-returns</NavLink>
        </li>
      </ul>

      <p>tnz@email.com | +383 44 700 700</p>
      <p className={classes.right}>© {currentYear} TNZ. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
