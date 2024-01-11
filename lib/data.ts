import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
import four from "../app/images/fourpersons.png"
import subscription from "../app/images/Subscription-Form.png"
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Matric",
    location: "Islamabad, Pakistan",
    description:
      "I completed my Matriculation(SSC) from Scienta Vision in G-10/4",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2021",
  },
  {
    title: "HSSC",
    location: "Islamabad, Pakistan",
    description:
      "I completed my HSSC from Pedagogia in G-10/2",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "University",
    location: "Islamabad, Pakistan",
    description:
      "I'm now learning to be a Full-Stack Developer at PIAIC (AIR University)",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Designing Layout",
    description:
      "This banner is made by using Flex ",
    tags: ["Flex", "Next-App", "Tailwind"],
    imageUrl: {four},
  },
  {
    title: "Subsciption-Form",
    description:
      "This Subscription form is made by using grids and flex",
    tags: ["Grids", "Flex", "Tailwind", "Next-App"],
    imageUrl: {subscription},
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git-Hub",
  "Tailwind",
  "Python",
  "Framer Motion",
] as const;
