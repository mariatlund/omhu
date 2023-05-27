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
  const listItemStyle = "border-l-2 border-t-2 border-b-2  border-blue py-2 px-8 hover:text-blue-50";
  return (
    <nav className="nav_wrapper flex flex-row items-center justify-between px-5 sm:px-10 py-3 sm:py-5 text-blue bg-white">
      <div className="flex flex-row items-center justify-aroun gap-5 ">
        <Link href="/">
          <Image className="logo w-14 h-auto" src={Logo} alt="Omhu logo" />
        </Link>
        <ul className="nav_links hidden lg:inline-flex flex-row style-body">
          <li className={listItemStyle}>
            {" "}
            <Link href="/shop" onClick={() => setShowMenu(false)} className="uppercase">
              Shop
            </Link>
          </li>
          <li className={listItemStyle}>
            {" "}
            <Link href="/showroom" className="uppercase">
              Showroom
            </Link>
          </li>
          <li className={listItemStyle}>
            {" "}
            <Link href="/about" className="uppercase">
              About us
            </Link>
          </li>
          <li className={listItemStyle}>
            {" "}
            <Link href="/contact" className="uppercase">
              Contact
            </Link>
          </li>
          <li className="border-2 border-blue py-2 px-8 hover:text-blue-50">
            {" "}
            <Link href="/faq" className="uppercase">
              FAQ
            </Link>
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
