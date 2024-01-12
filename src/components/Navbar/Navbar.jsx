import React from "react";
import { Cart2 } from "react-bootstrap-icons";
import Logo from "../../assets/logopizza.png";
import "./Navbar.css";

const Navbar = ({ number, childToParent }) => {
  return (
    <div className="navbar">
      <div></div>
      <img className="logo" src={Logo} />
      <div
        className="cart"
        onClick={() => {
          childToParent();
        }}
      >
        <Cart2 className="icon-cart" size={45} color="#555" />
        <div className="circle-number">{number}</div>
      </div>
    </div>
  );
};

export default Navbar;
