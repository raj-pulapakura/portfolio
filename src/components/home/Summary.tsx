"use client";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Summary() {
  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
      <p className="text-center lg:text-left lg:shadow-boxlight lg:dark:shadow-boxdark lg:p-8 lg:rounded-2xl">
        Hi, I'm Raj. I'm a software developer with expertise in full stack
        web-development, cross-platform app development, and machine learning. I
        love building beautiful and elegant interfaces, and combining them with
        the power and functionality of machine learning!
      </p>
    </AnimationOnScroll>
  );
}
