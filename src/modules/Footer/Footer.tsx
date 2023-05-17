import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo_500x500.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-blue text-link-50 font-semibold">
      <div className="grid space-y-10 style-body-small md:style-body py-10 md:flex md:py-14 md:gap-10 md:space-y-0 md:justify-between container">
        <Image src={Logo} alt="OMHU Logo" className="w-24 h-24 justify-self-center border border-white md:w-20 md:h-20" />
        <div className="grid space-y-1">
          <h3 className="style-h4 uppercase text-white">Contact</h3>
          <address className="not-italic pb-4">
            OMHU (Kram & Klenodier ApS) <br />
            Kongevejen 340, KLD. <br />
            2840 Holte <br />
            CVR Number: 42822167
          </address>
          <span className="uppercase">
            Phone:{" "}
            <a href="tel:+4526118956" className="text-link-50 no-underline">
              +45 26 11 89 56
            </a>
          </span>
          <span className="uppercase">
            Email:{" "}
            <a href="mailto:hello@omhucph.com" className="text-link-50 no-underline">
              hello@omhucph.com
            </a>
          </span>
        </div>
        <div className="grid space-y-1">
          <h3 className="style-h4 uppercase text-white">Information</h3>
          <a href="" download className="text-link-50 no-underline">
            Terms & Conditions
          </a>
          <Link href="/faq" className="text-link-50 no-underline">
            Frequently Asked Questions (FAQ)
          </Link>

          <h3 className="style-h4 uppercase text-white pt-10">Follow us</h3>
          <div className="flex gap-x-5 pt-2">
            <Link href="https://www.instagram.com/omhu_cph/" target="_blank" className="bg-white w-10 h-10 rounded-full flex items-center justify-center flex-none">
              <svg width="27" height="27" viewBox="0 0 23 23" fill="none">
                <path
                  d="M7.18611 2C4.32649 2 2 4.32649 2 7.18611V15.4839C2 18.3435 4.32649 20.67 7.18611 20.67H15.4839C18.3435 20.67 20.67 18.3435 20.67 15.4839V7.18611C20.67 4.32649 18.3435 2 15.4839 2H7.18611ZM7.18611 4.07444H15.4839C17.1995 4.07444 18.5956 5.47055 18.5956 7.18611V15.4839C18.5956 17.1995 17.1995 18.5956 15.4839 18.5956H7.18611C5.47055 18.5956 4.07444 17.1995 4.07444 15.4839V7.18611C4.07444 5.47055 5.47055 4.07444 7.18611 4.07444ZM16.5211 5.11167C16.246 5.11167 15.9822 5.22095 15.7877 5.41546C15.5932 5.60998 15.4839 5.8738 15.4839 6.14889C15.4839 6.42398 15.5932 6.6878 15.7877 6.88232C15.9822 7.07683 16.246 7.18611 16.5211 7.18611C16.7962 7.18611 17.06 7.07683 17.2545 6.88232C17.4491 6.6878 17.5583 6.42398 17.5583 6.14889C17.5583 5.8738 17.4491 5.60998 17.2545 5.41546C17.06 5.22095 16.7962 5.11167 16.5211 5.11167ZM11.335 6.14889C8.47538 6.14889 6.14889 8.47538 6.14889 11.335C6.14889 14.1946 8.47538 16.5211 11.335 16.5211C14.1946 16.5211 16.5211 14.1946 16.5211 11.335C16.5211 8.47538 14.1946 6.14889 11.335 6.14889ZM11.335 8.22333C13.0506 8.22333 14.4467 9.61943 14.4467 11.335C14.4467 13.0506 13.0506 14.4467 11.335 14.4467C9.61943 14.4467 8.22333 13.0506 8.22333 11.335C8.22333 9.61943 9.61943 8.22333 11.335 8.22333Z"
                  fill="#1D00B2"
                />
              </svg>
            </Link>
            <Link href="https://www.tiktok.com/@omhu_cph" target="_blank" className="bg-white w-10 h-10 rounded-full flex items-center justify-center flex-none">
              <svg width="20" height="25" viewBox="0 0 19 23" fill="none">
                <path
                  d="M9.468 2V15.069C9.468 16.1239 8.65591 16.936 7.601 16.936C6.54609 16.936 5.734 16.1239 5.734 15.069C5.734 14.0141 6.54609 13.202 7.601 13.202V9.468C4.52984 9.468 2 11.9978 2 15.069C2 18.1402 4.52984 20.67 7.601 20.67C10.6722 20.67 13.202 18.1402 13.202 15.069V8.03493C14.3523 8.8544 15.5528 9.468 16.936 9.468V5.734C16.8476 5.734 15.5594 5.32501 14.6606 4.5416C13.7618 3.75819 13.202 2.77479 13.202 2H9.468Z"
                  fill="#1D00B2"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid space-y-1">
          <h3 className="style-h4 uppercase text-white">Sitemap</h3>
          <Link href="/shop" className="text-link-50 no-underline">
            Shop
          </Link>
          <Link href="/shop" className="text-link-50 no-underline">
            Showroom
          </Link>
          <Link href="/shop" className="text-link-50 no-underline">
            About Us
          </Link>
          <Link href="/shop" className="text-link-50 no-underline">
            Contact
          </Link>
          <Link href="/shop" className="text-link-50 no-underline">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
