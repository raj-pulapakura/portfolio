"use client";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Summary() {
  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
      <p className="text-center lg:text-left lg:shadow-boxlight lg:dark:shadow-boxdark lg:p-8 lg:rounded-2xl">
        Hi, I'm Raj. I'm a Machine Learning Engineer, Certified TensorFlow
        Developer, and Full-Stack Engineer. I love ML and AI because of its
        ability to solve human problems, eliminate inefficiencies, and reduce
        human suffering. I specialize in building and deploying ML-powered
        applications.
      </p>
    </AnimationOnScroll>
  );
}
