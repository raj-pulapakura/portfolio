import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import ArticleItemsSmall from "@/components/articles/ArticleItemSmall";
import ProjectItemSmall from "@/components/projects/ProjectItemSmall";
import articles from "@/data/articles";
import projects from "@/data/projects";
import skills from "@/data/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/head.png" alt="Me" width="200" height="200" />
      <h1>
        Full-stack web and mobile developer, and Machine learning engineer.
      </h1>
      <p>
        I am a software developer with expertise in full stack web-development,
        cross-platform app development, and machine learning. I love building
        beautiful and elegant interfaces, and combining them with the power and
        functionality of machine learning. I have diverse software engineering
        domain knowledge, having experience with many aspects of software
        development. I have used a wide array of technologies including
        web-based, app-based, APIs, CI/CD and cloud-based tech.
      </p>
      <Socials />
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectItemSmall project={project} />
      ))}
      <h2>Articles</h2>
      {articles.map((article) => (
        <ArticleItemsSmall article={article} />
      ))}
      <Footer />
    </main>
  );
}
