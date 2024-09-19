import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { experience } from "@/lib/constants";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import Image from "next/image";

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
              className="group flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
            >
              {item.certificateImg && (
                <div className="fixed z-10 hidden h-full w-6/12 items-center justify-center lg:left-0 lg:top-0 lg:group-hover:flex">
                  <Image
                    src={item.certificateImg}
                    alt="img"
                    width={900}
                    height={900}
                    className="h-[600px] w-auto"
                  />
                </div>
              )}
              <span className="text-accent">{item?.duration}</span>

              {item?.link ? (
                <Link href={item?.link} target="_blank">
                  <h3 className="min-h-[60px] max-w-[300px] text-center text-xl lg:text-left">
                    {item?.position}
                    {
                      <FaLink className="ml-3 inline-block text-sm text-white/60" />
                    }
                  </h3>
                </Link>
              ) : (
                <h3 className="min-h-[60px] max-w-[300px] text-center text-xl lg:text-left">
                  {item?.position}
                </h3>
              )}
              <div className="flex items-center gap-3">
                {/* dot */}
                <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
                <p className="leading-5 text-white/60">{item?.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Experience;
