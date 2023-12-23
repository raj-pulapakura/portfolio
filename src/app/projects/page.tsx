import ProjectItemLarge from "@/components/projects/ProjectItemLarge";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="text-4xl font-black mb-10 text-center">
        I express my love for software development through the{" "}
        <span className="text-dark"> projects</span> I build.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectItemLarge project={project} key={project.title} />
        ))}
      </div>
    </main>
  );
}
