import { Project } from "@/data/projects";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ProjectLink from "./ProjectLink";
import Chip from "../Chip";

export default function ProjectItemLarge({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <section
      className={`items-center shadow-boxlight dark:shadow-boxdark rounded-lg p-5 lg:p-10 ${className}`}
    >
      <Image
        className="w-full h-auto rounded-md mb-5"
        src={project.thumbnailURL}
        alt={`${project.title} thumbnail`}
        width="1000"
        height="1000"
      />
      <div className="w-full mb-5">
        <h1 className="text-xl font-bold mb-1">{project.title}</h1>
        <p className="text-md">{project.description}</p>
      </div>

      <div className="flex gap-5 mb-5">
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

      <div>
        {project.technologiesUsed.map((tech) => (
          <Chip className="text-xs md:text-sm" secondary={true}>
            {tech}
          </Chip>
        ))}
      </div>
    </section>
  );
}
