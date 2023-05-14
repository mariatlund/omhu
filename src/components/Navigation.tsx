import React from "react";

function Navigation() {
  return (
    <div>
      <div className="nav_wrapper">
        <div className="nav_logo"> </div>
        <div className="nav_links">
          <a href="/shop">Shop</a>
          <a href="/showroom">Showroom</a>
          <a href="/about">About us</a>
          <a href="/contact">Contact</a>
          <a href="/contact">FAQ</a>
        </div>
        <div> basket </div>
      </div>
    </div>
  );
}

export default Navigation;
