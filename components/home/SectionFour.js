import Image from "next/image";

const inputValues = [
  { title: "First name", type: "text" },
  { title: "Email Address", type: "text" },
  { title: "Subscribe now", type: "email" },
];

const SectionFour = () => {
  return (
    <div data-aos="fade-up" className="relative flex flex-col space-y-9 items-center rounded-xl bg-primary py-14 mx-5 mb-16 md:mx-10 md:py-20 ">
      <div className="text-xl font-semibold text-white text-center md:text-4xl">
        Subscribe to our newsletter
      </div>
      <div className="flex flex-col px-8 w-full space-x-0 space-y-2 md:w-max md:flex-row md:space-x-2 md:space-y-0">
        {inputValues.map((content, index) => {
          return index === 2 ? (
            <button className="bg-white text-center rounded-md h-14 text-black px-10 text-semibold">
              {content.title}
            </button>
          ) : (
            <input
              key={index}
              placeholder={content.title}
              className={
                "placeholder-white text-white rounded-md pl-2 h-14 bg-transparent border border-secondary3 outline-secondary3 outline-0.5"
              }
              type={content.type}
            />
          );
        })}
      </div>
      <Image
        priority
        loading="eager"
        height={217}
        width={266}
        className="h-auto w-auto absolute -top-10 left-0"
        src="/images/half-1.svg"
      />

      <Image
        priority
        loading="eager"
        height={217}
        width={266}
        className="h-auto w-auto absolute bottom-0 right-0"
        src="/images/half-2.svg"
      />
    </div>
  );
};

export default SectionFour;
