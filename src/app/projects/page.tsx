import ProjectItemLarge from "@/components/projects/ProjectItemLarge";
import projects from "@/data/projects";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="text-3xl md:text-4xl font-black mb-10 text-center">
        I express my love for coding through the{" "}
        <span className="text-light dark:text-dark"> projects</span> I build.
      </h1>
      <h2 className="text-lg font-bold mb-10 text-center">
        <Link href="https://github.com/raj-pulapakura">
          <span className="underline underline-offset-4 decoration-light dark:decoration-dark">
            Check out my GitHub <FontAwesomeIcon icon={faGithub} />
          </span>
        </Link>{" "}
        to see all my awesome projects.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectItemLarge project={project} key={project.title} />
        ))}
      </div>
    </main>
  );
}
