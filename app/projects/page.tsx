"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'project 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ad vel eius pariatur',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'JavaScript' }],
    image: '/assets/example-project/example1.png',
    liveUrl: '',
    githubUrl: '',
  },
  {
    num: '02',
    category: 'Fullstack',
    title: 'project 2',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ad vel eius pariatur',
    stack: [{ name: 'Nextjs' }, { name: 'Tailwind.css' },{ name: 'Node JS' }],
    image: '/assets/example-project/example2.png',
    liveUrl: '',
    githubUrl: '',
  },
  {
    num: '03',
    category: 'Backend',
    title: 'project 3',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ad vel eius pariatur',
    stack: [{ name: 'Php' }, { name: 'MySQL' }],
    image: '/assets/example-project/example3.png',
    liveUrl: '',
    githubUrl: '',
  },
];



const Project = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-12">
          <div>Text</div>
          <div>Slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;