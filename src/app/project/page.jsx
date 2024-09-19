"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub, BsYoutube } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import SliderButtons from "@/components/ui/slider-buttons";

const ProjectPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-5"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-outline text-8xl font-extrabold leading-none text-transparent">
                {project?.id}
              </div>

              {/* project title & category */}
              <div>
                <h2 className="text-[42px] font-bold capitalize leading-none text-white transition-all duration-500 group-hover:text-accent">
                  {project?.title}
                </h2>
                <h2 className="mt-2 text-base font-bold uppercase leading-none text-white/70 transition-all duration-500 group-hover:text-accent">
                  {project?.category}
                </h2>
              </div>
              {/* project description */}
              <p className="text-white/60">{project?.description}</p>

              {/* stacks */}
              <p className="text-wrap capitalize text-accent">
                {" "}
                {project?.stack?.join(", ")}{" "}
              </p>

              <div className="border border-white/20"></div>
              <div className="mb-10 flex items-center gap-4">
                {project?.live && (
                  <Link href={project?.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white/5 md:h-[70px] md:w-[70px]">
                          <BsArrowUpRight className="text-2xl text-white group-hover:text-accent md:text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project?.github && (
                  <Link href={project?.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white/5 md:h-[70px] md:w-[70px]">
                          <BsGithub className="text-2xl text-white group-hover:text-accent md:text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project?.youtube && (
                  <Link href={project?.youtube} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="group flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white/5 md:h-[70px] md:w-[70px]">
                          <BsYoutube className="text-2xl text-white group-hover:text-accent md:text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Youtube</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="group relative flex h-[270px] items-center justify-center bg-pink-50/20 sm:h-[350px] md:h-[450px]">
                    {/* overlay */}
                    <div className="absolute bottom-0 top-0 h-full w-full bg-primary"></div>
                    {/* image */}
                    <div className="relative h-full w-full">
                      <Image
                        src={project?.image}
                        fill
                        className="object-contain brightness-75"
                        alt="project img"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectPage;
