import React from "react";
import "./Header.scss";
import logo from '../../assets/images/logo.svg'
import bascket from '../../assets/images/bascket.svg'

const Header = () => {
  return (
    <div>
    <header className="header">
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="/contact">All products</a>
          </li>
          <li>
            <a href="#">All sales</a>
          </li>
        </ul>
      </nav>
      <img src={bascket} alt="" />
    </header>
    </div>
  );
};

export { Header };  