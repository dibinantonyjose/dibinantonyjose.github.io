import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <section className="project-page">
      {projects.map((project) => (
        <div key={project.path} className="project-list">
          <p className="project-meta project-date">{project.metaData?.date}</p>
          <Link
            to={project.path
              .replace("../assets/projects/", "")
              .replace(".mdx", "")}
          >
            <h3 className="link-class">{project.metaData?.title}</h3>
          </Link>
          <p className="project-meta">{project.metaData?.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
