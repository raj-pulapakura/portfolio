import ProjectItemLarge from "@/components/projects/ProjectItemLarge";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <h1>
        I express my love for software development through the projects I build.
      </h1>
      {projects.map((project) => (
        <ProjectItemLarge project={project} key={project.title} />
      ))}
    </main>
  );
}
