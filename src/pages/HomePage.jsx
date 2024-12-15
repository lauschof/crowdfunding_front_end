import { useState } from "react";
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "../pages/HomePage.css";

function HomePage() {
  const { projects } = useProjects(); // Assume projects is an array of project data
  const [visibleProjects, setVisibleProjects] = useState(6); // Start with 6 projects

  const handleShowMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length)); // Load 6 more projects
  };

  return (
    <div className="main-container">
      <div id="project-list">
        {projects.slice(0, visibleProjects).map((projectData, key) => (
          <ProjectCard key={key} projectData={projectData} />
        ))}
      </div>
      {visibleProjects < projects.length && (
        <button className="show-more" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
}

export default HomePage;