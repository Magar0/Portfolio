import { about } from "@/lib/constants";
import React from "react";

const About = () => {
  return (
    <div className="w-full text-center xl:text-left">
      <h3 className="flex flex-col gap-[30px]">{about.title}</h3>
      <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
        {about.description}
      </p>
      <ul className="mx-auto grid max-w-[620px] grid-cols-1 justify-items-start gap-y-6 text-left md:grid-cols-2 xl:mx-0">
        {about.info.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-4 xl:justify-start"
          >
            <span className="text-white/60">{item.name}</span>
            <span className="text-base md:text-xl">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
