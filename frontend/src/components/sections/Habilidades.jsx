import { curriculumData } from '../../data/curriculumData';
import '../../styles/sections/Habilidades.css';

const Habilidades = () => {
  const { skills } = curriculumData;

  return (
    <section id="habilidades" className="content-section">
      <div className="section-header">
        <h2>Habilidades Técnicas</h2>
        <div className="header-line"></div>
      </div>

      <div className="skills-grid">
        <div className="skill-category">
          <h3><i className="fas fa-laptop-code"></i> Frontend</h3>
          <div className="skill-tags">
            {skills.frontend.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3><i className="fas fa-server"></i> Backend</h3>
          <div className="skill-tags">
            {skills.backend.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3><i className="fas fa-tools"></i> Herramientas</h3>
          <div className="skill-tags">
            {skills.tools.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3><i className="fas fa-project-diagram"></i> Metodologías</h3>
          <div className="skill-tags">
            {skills.methodologies.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;