import { useEffect, useState } from "react";
import "./Projects.css";
const modules = import.meta.glob("../assets/projects/*.mdx");

function Projects() {
  const [projects, setProjects] = useState([]);

  const loadProjects = async () => {
    const projectData = await Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const module = await resolver();
        return { path, ...module };
      })
    );
    setProjects(projectData);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <>
      {projects.map((project) => (
        <div key={project.path} className="project-list">
          <p>{project.metaData?.date}</p>
          <h3>{project.metaData?.title}</h3>
          <p>{project.metaData?.description}</p>
        </div>
      ))}
    </>
  );
}

export default Projects;
