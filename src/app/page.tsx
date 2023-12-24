import Footer from "@/components/layout/Footer";
import Socials from "@/components/Socials";
import ArticleItemsSmall from "@/components/articles/ArticleItemSmall";
import ProjectItemSmall from "@/components/projects/ProjectItemSmall";
import articles from "@/data/articles";
import projects from "@/data/projects";
import skills from "@/data/skills";
import Image from "next/image";
import Chip from "@/components/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faFile } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse lg:items-center lg:flex-row gap-10 justify-between mb-20">
        <div className="lg:w-1/2 ">
          <h1 className="text-5xl md:text-6xl font-black mb-10">
            Full-stack web and mobile developer, and Machine learning engineer.
          </h1>

          <Socials />
        </div>
        <div className="lg:w-1/2">
          <Image
            className="rounded-lg lg:text-right lg:ml-auto"
            src="pfps/head.png"
            alt="Me"
            width="400"
            height="400"
          />
        </div>
      </section>

      <p className="mb-10">
        👋 Hi, I'm Raj. I'm a software developer with expertise in full stack
        web-development, cross-platform app development, and machine learning. I
        love building beautiful and elegant interfaces, and combining them with
        the power and functionality of machine learning!
      </p>

      <section className="mb-20">
        {skills.map((skill) => (
          <Chip>
            <p className="text-md">{skill}</p>
          </Chip>
        ))}
      </section>

      <h1 className="text-5xl font-black z-10 mb-10">
        <FontAwesomeIcon icon={faFile} /> Creations
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
        {projects.map((project) => (
          <ProjectItemSmall
            className=""
            project={project}
            key={project.title}
          />
        ))}
      </section>

      <h1 className="text-5xl font-black z-10 mb-10">
        <FontAwesomeIcon icon={faBook} /> Articles
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map((article) => (
          <ArticleItemsSmall article={article} />
        ))}
      </section>
    </main>
  );
}
