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
    <div className="mb-40 ">
      <h4 className="text-3xl font-semibold text-center">
        Remove Toxic Contents
      </h4>
      <p className="text-lg font-light text-center">
        Learn how to use links effectively to safeguard your contents
      </p>
      <div className="flex mx-5 bg-white px-10 py-12 md:mx-20">
        {sectionTwoContent.map((content, index) => {
            const margin = index !== 2 ? "border-r border-black" : "";
          return <div key={index} className={`${margin} px-5`}>
            <div className="font-semibold text-center">
              Moderate your content
            </div>
            <div className="font-light">
              Moderate what contents you would love to see and block the
              contents you considered toxic or downgrading.{" "}
            </div>
          </div>
})}
      </div>
    </div>
  );
};

export default SectionTwo;
