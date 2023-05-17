import React from "react";
import CloseIcon from "../../assets/icons/close.svg";
import Image from "next/image";

function OpenMenu(props: { showMenu: boolean; setShowMenu: Function }) {
  return (
    <div className="text-blue h-80 flex flex-col absolute top-0 left-0 w-full px-5 py-7 sm:px-10 bg-white gap-10">
      <Image onClick={() => props.setShowMenu(false)} className="cursor-pointer self-end" src={CloseIcon} alt="Burger menu close icon" />
      <ul className="nav_links flex flex-col gap-4 style-body">
        <li>
          <a href="/shop" className="uppercase">
            Shop
          </a>
        </li>
        <li>
          <a href="/showroom" className="uppercase">
            Showroom
          </a>
        </li>
        <li>
          <a href="/about" className="uppercase">
            About us
          </a>
        </li>
        <li>
          <a href="/contact" className="uppercase">
            Contact
          </a>
        </li>
        <li>
          <a href="/faq" className="uppercase">
            FAQ
          </a>
        </li>
      </ul>
    </div>
  );
}

export default OpenMenu;
