import Image from "next/image";
const icons = [
  "twitter-icon",
  "facebook-icon",
  "instagram-icon",
  "github-icon",
];
const Footer = () => {
  return (
    <footer className="bg-white pt-12 px-5 text-white font-light pb-10 text-base md:text-xl  md:px-10">
      <div className="flex flex-wrap justify-between items-center space-y-8 lg:flex-row md:space-y-0">
        <div className="flex flex-col justify-between text-secondary space-y-5">
          {" "}
          <div className="space-y-5 mb-3">
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
              <div className="text-2xl pl-2 text-black font-normal">LINKS</div>
            </div>
            <div className="max-w-sm mb-10 text-secondary">
              Links is a platform that helps you monitor and track your social
              media contents
            </div>
          </div>
          <div className="flex space-x-4">
            {icons.map((icon, index) => (
              <Image
                key={index}
                className="w-auto h-auto"
                loading="eager"
                alt={icon}
                height={28}
                width={28}
                src={`images/icon/${icon}.svg`}
              />
            ))}
          </div>
        </div>
          <div className="space-y-4 text-secondary mr-5">
            <div className="">Services</div>
            <div>Career</div>
            <div>FAQs</div>
          </div>

          <div className="space-y-4 font-light text-secondary mr-5">
            <div className="">About</div>
            <div>Blog</div>
            <div>Registration</div>
          </div>
          <div className="space-y-4 font-light text-secondary mr-5">
            <div className=" ">Support</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      <div className="text-secondary border-t border-secondaryshade mt-20 text-sm font-normal text-lg text-center pt-5 pb-10">
        Property of <span className="font-semibold">opulencedeveloper.com</span>{" "}
        2023, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
