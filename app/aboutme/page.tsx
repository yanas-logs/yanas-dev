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

// about data
const about = {
  title: "About me",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Yana Suryana",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 321 654 987",
    },
    {
      fieldName: "Experience",
      fieldValue: "10+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "yanas.xxx",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesian",
    },
    {
      fieldName: "Email",
      fieldValue: "yanas.xxx@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Indonesian",
    },
  ],
};

// experience data
const experience = {
  icon: "", // ex: assets/aboutme/badge.svg
  title: "My experience",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-Commerse Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Software Developer Firm",
      position: "Junior Developer",
      duration: "2017 - 2018 ",
    },
  ],
};

// education data
const education = {
  icon: "", // ex: assets/aboutme/cap.svg
  title: "My education",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Developer",
      duration: "2025",
    },
    {
      institution: "Dicoding",
      degree: "Programming Javascript",
      duration: "2025",
    },
    {
      institution: "Counsera",
      degree: "Programming Course",
      duration: "2025",
    },
    {
      institution: "Google Cloud Skills",
      degree: "Cloud Computing",
      duration: "2025",
    },
    {
      institution: "Google Cloud Skills",
      degree: "Cloud Computing",
      duration: "2025",
    },
    {
      institution: "AWS",
      degree: "Certified Cloud Computing",
      duration: "2025",
    },
  ],
};

// skills data
const education = {
  title: "My skills",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },

    {
      icon: <FaPhp />,
      name: "Php",
    },
    {
      icon: <FaNextDotJs />,
      name: "Next.js",
    },
    {
      icon: <FaTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

import { Tabs, TabContent, TabList, TabTrigger } from "@/component/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/component/ui/scroll-area";

import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py12 xl:py-0"
    >
      <div className="container mx-auto ">
        <Tabs>
          <TabList>
            
          </TabList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default AboutMe;
