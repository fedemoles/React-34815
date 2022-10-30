import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-index">
      <ul className="nav-list">
      <li><a href="/">
          <h2>GAMER PROPS</h2></a>
        </li>
        <li>
          <a href="/">MOTHERBOARD</a>
        </li>
        <li>
          <a href="/">PROCESSOR</a>
        </li>
        <li>
          <a href="/">MEMORY</a>
        </li>
        <li>
          <a href="/">M2/SSD/HDD</a>
        </li>
        <li>
          <a href="/">GPU</a>
        </li>
        <li>
          <CartWidget/>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
