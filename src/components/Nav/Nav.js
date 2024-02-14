import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss"

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div>STOCK PRICES</div>
      </Link>
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
};

export default Nav;