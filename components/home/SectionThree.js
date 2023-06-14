import Image from "next/image";

const sectionThreeContents = [
  {
    title: "4,000+",
    subtitle: "Global customers",
    description: "We've helped over 4,000 unique individuals",
  },
  {
    title: "600%",
    subtitle: "Social media growth",
    description: "Our customers have reported an average of ~600% growth.",
  },
  {
    title: "10k",
    subtitle: "Global downloads",
    description: "Our app has been downloaded over 10k times.",
  },
  {
    title: "200+",
    subtitle: "200+",
    description: "We're proud of our 5-star rating with over 200 reviews.",
  },
];
const SectionThree = () => {
  return (
    <div data-aos="fade-up" className="flex px-5 justify-center mb-40">
      <div className="max-w-6xl">
        <div className="font-semibold text-center text-3xl md:text-start md:text-4xl mb-5">Why choose us?</div>
        <p className="text-lg text-secondary mb-10 leading-normal md:text-xl md:mb-20">
          We have grown to be a legit platform the everyone uses
        </p>
        <div className="flex flex-col items-center space-x-0 xl:items-start xl:flex-row xl:space-x-44">
          <div className="flex flex-col justify-between">
            <div className="flex justify-center flex-wrap max-w-sm md:justify-between">
              {sectionThreeContents.map((content, index) => (
                <div key={index} className="max-w-full mb-9 space-y-3 text-center md:mb-14 md:max-w-[11rem]">
                  <div className="text-secondary2 font-semibold text-2xl md:text-4xl">
                    {content.title}
                  </div>
                  <div className="font-semibold">{content.subtitle}</div>
                  <p className="text-secondary font-light px-3">
                    {content.description}
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-primaryshade1 py-4 px-6 w-max rounded-md text-white font-semibold hidden xl:block">
              Get Started
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/hero-image2.svg"
              priority
              loading="eager"
              height={1225.89}
              width={524.01}
              className="h-max w-max rounded-md"
            />
          </div>
          <button className="bg-primaryshade1 py-4 px-6 w-max rounded-md text-white font-semibold mt-8 block xl:hidden">
              Get Started
            </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default SectionThree;
