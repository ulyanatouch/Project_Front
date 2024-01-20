import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import bascket from "../../assets/images/bascket.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Main Page</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/all-products">All products</Link>
            </li>
            <li>
              <Link to="/all-sales">All sales</Link>
            </li>
          </ul>
        </nav>
        <img src={bascket} alt="basket" />
      </header>
    </div>
  );
};

export { Header };
