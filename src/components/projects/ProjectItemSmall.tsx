import { Project } from "@/data/projects";
import Image from "next/image";

export default function ProjectItemSmall({ project }: { project: Project }) {
  return (
    <section>
      <Image
        src={project.thumbnailURL}
        alt={`${project.title} thumbnail`}
        width="100"
        height="50"
      />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </section>
  );
}
