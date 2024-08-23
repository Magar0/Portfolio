"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Experience from "@/components/resume/experience";
import Education from "@/components/resume/education";
import Skills from "@/components/resume/skills";
import About from "@/components/resume/about";

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="maax-w-[380px] mx-auto flex w-full flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>
            <TabsContent value="skills" className="h-full w-full">
              <Skills />
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <About />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
