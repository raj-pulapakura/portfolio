"use client";

import projects from "@/data/projects";
import ProjectItemSmall from "../projects/ProjectItemSmall";

export default function ProjectsList() {
  return (
    <>
      {projects.map((project) => (
        <ProjectItemSmall className="" project={project} key={project.title} />
      ))}
    </>
  );
}
