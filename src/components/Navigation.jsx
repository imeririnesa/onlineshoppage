import { NavLink, useLocation } from "react-router-dom";
import classes from "./Navigation.module.css";
import { useEffect, useState } from "react";
import { menCollections, womenCollections } from "../assets/dummyData";

function Navigation({ navigationActive, toggleNav }) {
  const location = useLocation();
  const [currentNav, setCurrentNav] = useState("men");
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    if (location.pathname.startsWith("/women")) {
      setCurrentNav("women");
    } else if (location.pathname.startsWith("/men")) {
      setCurrentNav("men");
    } else {
      setCurrentNav("women");
    }
  }, [location.pathname]);
  useEffect(() => {
    if (navigationActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [navigationActive]);

  function onQuickLinkHander(quickLink) {
    setCurrentNav(quickLink);
  }

  function onClickNavigationHandler(e) {
    if (!e.target.closest("nav")) {
      toggleNav();
    }
  }

  const sale = {
    name: "Sale",
    imageMobile:
      "https://static.pullandbear.net/2/cms/assets/uploads/rebajasVes_23.jpg?imwidth=500&impolicy=pullandbear-itxmediumhigh&imformat=safari&ts=20240817020706",
    image:
      "https://static.pullandbear.net/2/cms/assets/uploads/rebajashes_14.jpg?imwidth=1800&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240816020206",
    link: "sale",
    description: "Discover the promotions at your nearest store",
  };

  const allWomen = {
    name: "All",
    image:
      "https://static.pullandbear.net/2/static2/menu/categories/1030017536.jpg?20240819015706&imwidth=375",
    link: "all",
  };
  const allMmen = {
    name: "All",
    image:
      "https://static.pullandbear.net/2/static2/menu/categories/1030017537.jpg?20240819015706&imwidth=192",
    link: "all",
  };

  const womanHeaderLinks = (
    <>
      <li>
        <NavLink className={classes.link} to={`women/${allWomen.link}`}>
          <img src={allWomen.image} />
          <span>{allWomen.name}</span>
        </NavLink>
      </li>
      {womenCollections.map((wmnCol, i) => {
        return (
          <li key={i} onClick={toggleNav}>
            <NavLink className={classes.link} to={`women/${wmnCol.link}`}>
              <img src={wmnCol.image} alt={wmnCol.name} />
              <span>{wmnCol.name}</span>
            </NavLink>
          </li>
        );
      })}
    </>
  );

  const menHeaderLinks = (
    <>
      <li>
        <NavLink className={classes.link} to={`women/${allWomen.link}`}>
          <img src={allWomen.image} alt={allWomen.name} />
          <span>{allWomen.name}</span>
        </NavLink>
      </li>
      {menCollections.map((mnCol, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              toggleNav();
            }}
          >
            <NavLink className={classes.link} to={`men/${mnCol.link}`}>
              <img src={mnCol.image} alt={mnCol.name} />
              <span>{mnCol.name}</span>
            </NavLink>
          </li>
        );
      })}
    </>
  );

  return (
    <div
      onClick={onClickNavigationHandler}
      className={`${classes.navWrapper} ${
        navigationActive ? classes.navWrapperActive : ""
      }`}
    >
      <nav
        className={`${classes.navigation} ${
          navigationActive ? classes.navOpen : ""
        }`}
      >
        <div className={classes.navHeader}>
          <div className={classes.quickLinks}>
            <span
              onClick={() => onQuickLinkHander("men")}
              className={`${classes.quickLink} ${
                currentNav === "men" ? classes.active : ""
              }`}
            >
              Men
            </span>
            <span
              onClick={() => onQuickLinkHander("women")}
              className={`${classes.quickLink} ${
                currentNav === "women" ? classes.active : ""
              }`}
            >
              Women
            </span>
          </div>
          <button className={classes.navigationButton} onClick={toggleNav}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <ul>
          <li onClick={toggleNav}>
            <NavLink to={currentNav + "/" + sale.link} className={classes.link}>
              <img src={sale.imageMobile} alt={sale.name} />
              <span>{sale.name}</span>
            </NavLink>
          </li>
          {currentNav === "women" ? womanHeaderLinks : menHeaderLinks}
        </ul>
        <ul className={classes.pages}>
          {/* <li>
            <NavLink onClick={toggleNav} to="about">
              About us
            </NavLink>
          </li> */}
          <li>
            <NavLink onClick={toggleNav} to="faq">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleNav} to="shipping-and-returns">
              Shipping and returns
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleNav} to="terms-of-service">
              Terms of service
            </NavLink>
          </li>
        </ul>
        <p className={classes.right}>
          © {currentYear} TNZ. All rights reserved.
        </p>
      </nav>
    </div>
  );
}
export default Navigation;
