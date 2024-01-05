"use client";

import Socials from "@/components/Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faFile } from "@fortawesome/free-solid-svg-icons";
import Headshot from "@/components/home/Headshot";
import Summary from "@/components/home/Summary";
import Skills from "@/components/home/Skills";
import ProjectsList from "@/components/home/ProjectsList";
import ArticlesList from "@/components/home/ArticlesList";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse items-center lg:flex-row gap-10 lg:justify-between mb-20 lg:mb-40">
        <div className="lg:w-1/2">
          <p className="mb-5 uppercase tracking-widest text-gray-300 text-center lg:text-left">
            Raj Pulapakura
          </p>
          <h1 className="text-3xl text-center font-black mb-10 md:text-4xl lg:text-5xl lg:text-left">
            Full-stack web and mobile developer, and Machine learning engineer.
          </h1>
          <Socials className="w-fit mx-auto lg:w-full lg:m-0" />
        </div>
        <Headshot className="lg:w-1/2" />
      </section>

      <div className="mb-20 lg:mb-40 flex flex-col gap-10 lg:flex-row lg:mt-20 lg:items-center">
        <Summary />
        <Skills />
      </div>

      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-black z-10 mb-10">
        <FontAwesomeIcon icon={faFile} /> Projects
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
        <ProjectsList />
      </section>

      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-black z-10 mb-10">
        <FontAwesomeIcon icon={faBook} /> Articles
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ArticlesList />
      </section>
    </main>
  );
}
