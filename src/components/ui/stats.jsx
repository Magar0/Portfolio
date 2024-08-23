"use client";

import CountUp from "react-countup";

const Stats = () => {
  const statsList = [
    {
      num: 4,
      text: "Months of experience",
    },
    {
      num: 20,
      text: "Projects completed",
    },
    {
      num: 10,
      text: "Technologies mastered",
    },
    {
      num: 500,
      text: "Code Commits",
    },
  ];
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {statsList.map((item, index) => (
            <div
              className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={3}
                delay={2}
                className="text-4xl font-extrabold xl:text-5xl"
                // suffix="+"
              />
              <p
                className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
