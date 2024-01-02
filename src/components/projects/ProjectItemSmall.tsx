import { Project } from "@/data/projects";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ProjectLink from "./ProjectLink";

export default function ProjectItemSmall({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <section
      className={`items-center shadow-boxlight dark:shadow-boxdark rounded-lg p-5 lg:p-10  ${className}`}
    >
      <Image
        className="w-full h-auto rounded-md mb-5"
        src={project.thumbnailURL}
        alt={`${project.title} thumbnail`}
        width="1000"
        height="1000"
      />
      <div className="w-full mb-5">
        <h1 className="text-xl font-bold mb-1 text-center md:text-left">
          {project.title}
        </h1>
        <p className="text-md text-center md:text-left">
          {project.description}
        </p>
      </div>

      <div className="flex gap-5 w-fit mx-auto md:m-0">
        {project.githubURL && (
          <ProjectLink
            className="fa-xl"
            icon={faGithub}
            link={project.githubURL}
          />
        )}
        {project.webURL && (
          <ProjectLink className="fa-xl" icon={faLink} link={project.webURL} />
        )}
        {project.videoURL && (
          <ProjectLink
            className="fa-xl"
            icon={faYoutube}
            link={project.videoURL}
          />
        )}
      </div>
    </section>
  );
}
