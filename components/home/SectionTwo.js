const sectionTwoContent = [
  {
    title: "Moderate your content",
    description:
      "Moderate what contents you would love to see and block the contents you considered toxic or downgrading.",
  },
  {
    title: "Promote your content",
    description:
      "Promote the legit contents you would love to see and block the contents you considered toxic or downgrading. ",
  },
  {
    title: "Analyze your content",
    description:
      "Analyze the useful contents you would love to see and block the contents you considered toxic or downgrading. ",
  },
];

const SectionTwo = () => {
  return (
    <div className="mb-40 mt-24 mx-5 space-y-4 flex flex-col items-center">
      <h4 className="text-2xl font-semibold text-center md:text-3xl">
        Remove <span className="text-primary">Toxic</span> Contents
      </h4>
      <p className="text-base text-secondary text-start mb-2 md:text-xl md:text-center md:text-lg">
        Learn how to use links effectively to safeguard your contents
      </p>
      <div className="flex flex-col bg-white px-5 py-5 max-w-6xl border space-y-5 md:flex-row md:space-y-0  md:px-7 md:py-14">
        {sectionTwoContent.map((content, index) => {
            const margin = index !== 2 ? "border-b pb-8 b-r-transparent md:border-r md:border-b-transparent md:pb-0 border-black" : "";
          return <div key={index} className={`${margin} px-0 space-y- md:px-5`}>
            <div className="text-lg text-center lg:text-xl">
              {content.title}
            </div>
            <div className="font-light text-base text-secondary lg:text-lg">
             {content.description}
            </div>
          </div>
})}
      </div>
    </div>
  );
};

export default SectionTwo;
