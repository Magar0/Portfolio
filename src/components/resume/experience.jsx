import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { experience } from "@/lib/constants";

const Experience = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold"> {experience.title}</h3>
      <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
        {experience.description}
      </p>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
          {experience.items.map((item, index) => (
            <li
              key={index}
              className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="min-h-[60px] max-w-[300px] text-center text-xl lg:text-left">
                {item.position}
              </h3>
              <div className="flex items-center gap-3">
                {/* dot */}
                <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                <p className="leading-5 text-white/60">{item.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Experience;
