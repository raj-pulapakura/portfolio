"use client";

import skills from "@/data/skills";
import Chip from "../Chip";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Skills() {
  return (
    <section className="flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <AnimationOnScroll
          key={skill}
          animateOnce={true}
          animateIn="animate__fadeIn"
          delay={1000 + index * 100}
        >
          <Chip>
            <p className="text-xs md:text-md">{skill}</p>
          </Chip>
        </AnimationOnScroll>
      ))}
    </section>
  );
}
