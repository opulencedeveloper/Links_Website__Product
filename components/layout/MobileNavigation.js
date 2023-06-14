import Link from "next/link";
import { useRouter } from "next/router";

import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";

const linkContent = [
  { title: "App", link: "/" },
  { title: "Resources", link: "" },
  { title: "Pricing", link: "" },
  { title: "Market Place", link: "" },
];

const MobileNavigation = () => {
  const router = useRouter();
  const activeLink = router.pathname;

  return (
    <div className="flex flex-col bg-primaryshade2 w-94 h-full pt-4 pl-[1rem] lg:hidden">
      <div className="flex justify-center items-center space-x-1 mb-4 text-white">
        <Image
          src="images/logo/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className="h-auto w-auto"
          loading="eager"
          priority
        />
        <div className="text-2xl pl-2 text-black">Links</div>
      </div>
      <div className="text-secondary text-xl flex flex-col  items-center border-b border-secondaryshade">
        {" "}
        {linkContent.map((content, index) =>
          index === 0 || index === 1 ? (
            <select key={index} className="pr-1 py-4 bg-transparent">
              <option>{content.title}</option>
            </select>
          ) : (
            <Link
              key={index}
              onClick={handleWhatsAppClick}
              className="py-4"
              href={content.link}
            >
              {content.title}
            </Link>
          )
        )}{" "}
      </div>{" "}
      <div className="flex font-semibold mt-8 text-lg px-2">
        {" "}
        <Link
          href={""}
          onClick={handleWhatsAppClick}
          className="px-5 py-2 text-primaryshade"
        >
          Login
        </Link>
        <Link
          href={""}
          onClick={handleWhatsAppClick}
          className="border border-primaryshade rounded-md text-primaryshade px-2 py-2"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
