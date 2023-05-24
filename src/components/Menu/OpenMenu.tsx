import React from "react";
import CloseIcon from "../../assets/icons/close.svg";
import Image from "next/image";
import Link from "next/link";

function OpenMenu(props: { showMenu: boolean; setShowMenu: Function }) {
  return (
    <div className="text-blue h-80 flex flex-col absolute top-0 left-0 w-full px-5 py-7 sm:px-10 bg-white gap-10 z-10">
      <Image onClick={() => props.setShowMenu(false)} className="cursor-pointer self-end" src={CloseIcon} alt="Burger menu close icon" />
      <ul className="nav_links flex flex-col gap-4 style-body">
        <li className="hover:text-blue-50">
          <Link href="/shop" className="uppercase">
            Shop
          </Link>
        </li>
        <li className="hover:text-blue-50">
          <Link href="/showroom" className="uppercase">
            Showroom
          </Link>
        </li>
        <li className="hover:text-blue-50">
          <Link href="/about" className="uppercase">
            About us
          </Link>
        </li>
        <li className="hover:text-blue-50">
          <Link href="/contact" className="uppercase">
            Contact
          </Link>
        </li>
        <li className="hover:text-blue-50">
          <Link href="/faq" className="uppercase">
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default OpenMenu;
