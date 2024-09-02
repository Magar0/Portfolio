import { skills } from "@/lib/constants";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const [skillSet, setSkillSet] = useState(skills.items);

  const handleSelect = (value) => {
    if (value === "frontend") {
      const filterdSkills = skills.items.filter(
        (skill) => skill.category === "frontend",
      );
      setSkillSet(filterdSkills);
    } else if (value === "backend") {
      const filterdSkills = skills.items.filter(
        (skill) => skill.category === "backend",
      );
      setSkillSet(filterdSkills);
    } else {
      setSkillSet(skills.items);
    }
  };
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        {skills?.description && (
          <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
            {skills.description}
          </p>
        )}
      </div>
      <Tabs
        defaultValue="all"
        className="w-[400px]"
        onValueChange={handleSelect}
      >
        {/* button for differen skill category */}
        <TabsList className="gap-3">
          <TabsTrigger value="all" className="text-sm">
            All
          </TabsTrigger>
          <TabsTrigger value="frontend" className="text-sm">
            Frontend
          </TabsTrigger>
          <TabsTrigger value="backend" className="text-sm">
            Backend
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
          {skillSet.map((skill, index) => (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                    <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize"> {skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Skills;
