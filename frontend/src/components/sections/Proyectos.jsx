import { curriculumData } from '../../data/curriculumData';
import ProjectCard from '../ui/ProjectCard';
import '../../styles/sections/Proyectos.css';

const Proyectos = () => {
  const { projects } = curriculumData;

  return (
    <section id="proyectos" className="content-section">
      <div className="section-header">
        <h2>Proyectos Destacados</h2>
        <div className="header-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;