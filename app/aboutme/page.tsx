"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
/*import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
 */

// import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Item } from "@radix-ui/react-select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  info: [
    { fieldName: "Name", fieldValue: "Yana Suryana" },
    { fieldName: "Phone", fieldValue: "(+62) 321 654 987" },
    { fieldName: "Experience", fieldValue: "10+ Years" },
    { fieldName: "Skype", fieldValue: "yanas.xxx" },
    { fieldName: "Nationality", fieldValue: "Indonesian" },
    { fieldName: "Email", fieldValue: "yanas.xxx@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Indonesian" },
  ],
};

// experience data
const experience = {
  icon: "", // ex: assets/aboutme/badge.svg
  title: "My experience",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  items: [
    { company: "Tech Solutions Inc", position: "Full Stack Developer", duration: "2022 - Present" },
    { company: "Web Design Studio", position: "Front-End Developer Intern", duration: "Summer 2021" },
    { company: "E-Commerce Startup", position: "Freelance Web Developer", duration: "2020 - 2021" },
    { company: "Tech Academy", position: "Teaching Assistant", duration: "2019 - 2020" },
    { company: "Software Developer Firm", position: "Junior Developer", duration: "2017 - 2018" },
  ],
};

// education data
const education = {
  icon: "", // ex: assets/aboutme/cap.svg
  title: "My education",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  items: [
    { institution: "Online Course Platform", degree: "Full Stack Web Developer", duration: "2025" },
    { institution: "Dicoding", degree: "Programming Javascript", duration: "2025" },
    { institution: "Coursera", degree: "Programming Course", duration: "2025" },
    { institution: "Google Cloud Skills", degree: "Cloud Computing", duration: "2025" },
    { institution: "AWS", degree: "Certified Cloud Computing", duration: "2025" },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
  ],
};

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Sidebar tab list */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content area */}
          <div className="min-h-[70vh] w-full">
            {/* Experience area */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center ls:items-start gap-1">
                          <span className="text-accentNeon">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accentNeon"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center ls:items-start gap-1">
                          <span className="text-accentNeon">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accentNeon"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accentNeon transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-4 justify-center xl:justify-start"
                      >
                        <span className="text-white/60 flex-shrink-0 whitespace-nowrap">
                          {item.fieldName}
                        </span>
                        <span className="text-xl whitespace-nowrap">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>

              </div>
            </TabsContent>
            
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default AboutMe;
