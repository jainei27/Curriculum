import { curriculumData } from '../../data/curriculumData';
import '../../styles/sections/Experiencia.css';

const Experiencia = () => {
  const { experience } = curriculumData;

  return (
    <section id="experiencia" className="content-section">
      <div className="section-header">
        <h2>Experiencia Laboral</h2>
        <div className="header-line"></div>
      </div>

      <div className="timeline">
        {experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-content">
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <ul>
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;