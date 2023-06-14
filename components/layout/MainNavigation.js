import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import MobileNavigation from "./MobileNavigation";
import handleWhatsAppClick from "@/helpers/whatsapp";
import Portal from "../UI/Portal";

const linkContent = [
  { title: "App", link: "/" },
  { title: "Resources", link: "" },
  { title: "Pricing", link: "" },
  { title: "MarketPlace", link: "" },
];
let navAnimationClass = "";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname;

  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full flex items-center bg-primary justify-between py-5  px-5 md:px-10">
     <div className="fixed top-0 right-5 text-xs text-white">
        Site developed by opulencedeveloper
      </div>
       <Portal isOpen={isOpen} onClick={toggleDrawer}>
        <div
          className={`fixed inset-y-0 z-50 -left-72 shadow-lg lg:hidden transform  ${
            isOpen ? "translate-x-full" : "translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <MobileNavigation />
        </div>
      </Portal>
      <div className="flex items-center space-x-1 text-white">
        <Image
          src="images/logo/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className="h-auto w-auto"
          loading="eager"
          priority
        />
        <div className="text-2xl pl-2">Links</div>
      </div>

      <div className="hidden lg:flex">
        <div className="text-white text-xl space-x-14">
          {" "}
          {linkContent.map((content, index) =>
            index === 0 || index === 1 ? (
              <select key={index} className="pr-1 bg-transparent">
                <option>{content.title}</option>
              </select>
            ) : (
              <Link
                onClick={handleWhatsAppClick}
                key={index}
                className=""
                href={content.link}
              >
                {content.title}
              </Link>
            )
          )}{" "}
        </div>{" "}
      </div>
      <div className="flex font-semibold text-lg text-primaryshade hidden lg:flex">
        {" "}
        <Link
           onClick={handleWhatsAppClick}
          href={""}
          className="px-10 py-3"
        >
          Login
        </Link>
        <Link
            onClick={handleWhatsAppClick}
          href={""}
          className="bg-primary px-5 py-3 border border-2 border-primaryshade rounded-md"
        >
          Create Account
        </Link>
      </div>
      <button
        className={`${navAnimationClass} z-50 block hamburger lg:hidden focus:outline-none`}
        type="button"
        onClick={toggleDrawer}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </nav>
  );
};

export default MainNavigation;
