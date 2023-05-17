"use client";
import React from "react";
import Logo from "../../assets/logo_500x500.svg";
import Basket from "../../assets/icons/basket.svg";
import Image from "next/image";
import Burger from "../../assets/icons/menu.svg";
import Link from "next/link";
import { useState } from "react";
import OpenMenu from "./OpenMenu";

function Navigation() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const listItemStyle = "border-l-2 border-t-2 border-b-2  border-blue py-2 px-8";
  return (
    <nav className="nav_wrapper flex flex-row items-center justify-between px-5 sm:px-10 py-3 sm:py-5 text-blue bg-white">
      <div className="flex flex-row items-center justify-aroun gap-5 ">
        <Image className="logo w-14 h-auto" src={Logo} alt="Omhu logo" />
        <ul className="nav_links hidden lg:inline-flex flex-row style-body">
          <li className={listItemStyle}>
            {" "}
            <a href="/shop" className="uppercase">
              Shop
            </a>
          </li>
          <li className={listItemStyle}>
            {" "}
            <a href="/showroom" className="uppercase">
              Showroom
            </a>
          </li>
          <li className={listItemStyle}>
            {" "}
            <a href="/about" className="uppercase">
              About us
            </a>
          </li>
          <li className={listItemStyle}>
            {" "}
            <a href="/contact" className="uppercase">
              Contact
            </a>
          </li>
          <li className="border-2 border-blue py-2 px-8">
            {" "}
            <a href="/faq" className="uppercase">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="cart_burger_menu flex flex-row gap-5">
        <Link href="/basket">
          <Image className="cart w-9" src={Basket} alt="Cart icon"></Image>
        </Link>
        <Image onClick={() => setShowMenu(true)} className="burger_menu cursor-pointer lg:hidden" src={Burger} alt="Burger menu" />
      </div>

      {showMenu && <OpenMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
    </nav>
  );
}

export default Navigation;
