import { Project } from "@/data/projects";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ProjectLink from "./ProjectLink";

export default function ProjectItemLarge({ project }: { project: Project }) {
  return (
    <section>
      <Image
        src={project.thumbnailURL}
        alt={`${project.title} thumbnail`}
        width="400"
        height="50"
      />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.githubURL && (
        <ProjectLink icon={faGithub} link={project.githubURL} text={"Code"} />
      )}
      {project.webURL && (
        <ProjectLink
          icon={faLink}
          link={project.webURL}
          text={"Visit website"}
        />
      )}
      {project.videoURL && (
        <ProjectLink
          icon={faYoutube}
          link={project.videoURL}
          text={"YouTube demo"}
        />
      )}
    </section>
  );
}
