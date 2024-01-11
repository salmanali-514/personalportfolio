"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm a passionate coder with 6 months of hands-on experience bringing web experiences to life using a modern stack of technologies. I'm fluent in HTML, CSS, and Tailwind CSS, crafting pixel-perfect designs that seamlessly translate to code. I'm also proficient in TypeScript, ensuring code quality and maintainability, and I'm actively expanding my expertise in React, eager to create dynamic and interactive web applications.

I'm a quick learner with a knack for problem-solving and a drive to continuously explore new technologies. I'm excited to collaborate with a team that values innovation and clean code, where I can contribute my skills to building exceptional digital experiences.
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
