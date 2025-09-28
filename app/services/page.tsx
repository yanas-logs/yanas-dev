"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Development",
    description:
      "Building scalable and modern applications tailored to business needs with clean and efficient code.",
    href: "#",
  },
  {
    num: "02",
    title: "Optimization",
    description:
      "Improving website performance, SEO, and user experience with measurable results.",
    href: "#",
  },
  {
    num: "03",
    title: "Integration",
    description:
      "Seamlessly connecting systems and APIs to ensure smooth data flow and efficiency.",
    href: "#",
  },
  {
    num: "04",
    title: "Support",
    description:
      "Providing ongoing maintenance, updates, and technical support to keep projects running smoothly.",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                   className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accentNeon transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accentNeon transition-all duration-500">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-white/60">{service.description}</p>

              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
