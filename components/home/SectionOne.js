//import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";

const content = (styles) => (
  <div className={`${styles} relative`}>
    <div className="bg-white h-max rounded-md relative flex">
      <div className="flex items-center bg-primaryshade2 rounded-md absolute -left-5 top-16 text-black px-2 py-3 md:-left-16 md:dtop-40">
        <p className="text-xs md:text-base">Enjoy easy access </p>
        <Image
          src="images/icon/thumb.svg"
          alt="thumb icon"
          loading="eager"
          priority
          height={20}
          width={15}
          className="h-4 w-4 md:h-auto md:w-auto"
        />
      </div>
      <div className="flex items-start space-x-2 bg-primaryshade2 max-w-[70%] rounded-md absolute -left-5 bottom-10 text-black p-2 md:-left-16 md:max-w-[14rem] md:bottom-16">
        <Image
          src="images/icon/home.svg"
          alt="home icon"
          loading="eager"
          priority
          height={20}
          width={15}
          className="h-auto w-auto"
        />
        <p className="text-xs md:text-base">
          You would be able to grow your media presence
        </p>
      </div>
      <div className="flex items-start space-x-2 bg-primaryshade2 max-w-[60%] rounded-md absolute -right-2 -bottom-4 text-black p-2 md:max-w-[14rem] md:-bottom-8">
        <Image
          src="images/icon/idea.svg"
          alt="idea icon"
          loading="eager"
          priority
          height={20}
          width={15}
          className="h-4 w-4 md:h-auto md:w-auto"
        />
        <p className="text-xs md:text-base">You have 3000 more engagemets</p>
      </div>
      <Image
        src="/images/hero-image.svg"
        className="h-auto w-full py-2 -ml-2"
        alt="hero image"
        priority
        loading="eager"
        width={722}
        height={619}
      />
    </div>
  </div>
);

const SectionOne = () => {
  return (
    <div className="bg-primary w-full relative">
      <div className="absolute border h-full w-2/3 bottom-0 blur-8xl right-0 xl:top-0">
        <Image
          src="images/blur.svg"
          alt="star icon"
          loading="eager"
          priority
          height={712}
          width={627}
          className="h-full w-full"
        />
      </div>
      <div
        data-aos="fade-up"
        className=" flex flex-col text-white px-5 pb-20 space-y-8 pt-14 md:pt-40 md:px-10 xl:flex-row xl:space-y-0 "
      >
        {/* <div className="absolute bg-pink-600 blur-8xl h-1/2 w-1/2 "></div> */}

        <div className="flex-col justify-center w-full space-y-7 pt-0 xl:pt-5 xl:w-1/2 ">
          <h2 className="text-3xl font-semibold md:text-6xl">
            Improve your social media engagements
          </h2>
          <h3 className="text-base font-light md:text-xl">
            Welcome to Links, you would be able to monitor and track all your
            social media accounts and progress. You could also block unsolicited
            messages from different individuals. Is that what you would like?
            Click the button below.
          </h3>

          <button
            // onClick={handleWhatsAppClick}
            className="text-white text-sm font-semibold bg-primaryshade1 px-4 py-3 rounded-lg w-max md:text-lg md:px-7 md:py-4"
          >
            Start your free trial
          </button>

          {content(
            "w-full py-5 px-5 justify-center md:py-14 md:px-40 xl:hidden"
          )}

          <div className="flex space-x-1">
            {Array(5)
              .fill()
              .map((_, index) => (
                <Image
                  key={index}
                  src="images/icon/star.svg"
                  alt="star icon"
                  loading="eager"
                  priority
                  height={16}
                  width={16}
                  className="h-auto w-auto"
                />
              ))}
          </div>

          <div className="space-y-5">
            <div className="font-semibold text-xl">
              Best online platform ever!
            </div>

            <p className="text-sm font-light max-w-sm">
              I must say, I am really glad I stumbled on this platform. I can
              now monitor my social media effectively
            </p>
            <div className="flex items-center space-x-2">
              <Image
                src="images/icon/profile.svg"
                alt="profile icon"
                loading="eager"
                priority
                height={26}
                width={26}
                className="h-auto w-auto"
              />
              <div className="font-semibold text-sm">Amobi Victor Chukwuka</div>
            </div>
          </div>
        </div>

        {content("w-1/2 hidden justify-end xl:flex")}
      </div>{" "}
    </div>
  );
};

export default SectionOne;