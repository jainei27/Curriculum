import '../../styles/sections/Proyectos.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <i className={`fas fa-${project.icon}`}></i>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Código
          </a>
          <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;