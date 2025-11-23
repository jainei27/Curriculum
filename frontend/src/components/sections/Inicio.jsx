import { curriculumData } from '../../data/curriculumData';
import InfoCard from '../ui/InfoCard';
import SkillBar from '../ui/SkillBar';
import '../../styles/sections/Inicio.css';

const Inicio = () => {
  const { personalInfo, skills, languages } = curriculumData;

  return (
    <section id="inicio" className="content-section active">
      <div className="section-header">
        <h2>Inicio</h2>
        <div className="header-line"></div>
      </div>

      {/* DEBE estar envuelto en InfoCard */}
      <InfoCard title="Información Personal" icon="user">
        <div className="personal-info">
          <div className="info-item">
            <span className="info-label"><i className="fas fa-phone"></i> Teléfono:</span>
            <span className="info-value">{personalInfo.phone}</span>
          </div>
          <div className="info-item">
            <span className="info-label"><i className="fas fa-envelope"></i> Correo:</span>
            <span className="info-value">{personalInfo.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label"><i className="fab fa-linkedin"></i> LinkedIn:</span>
            <span className="info-value">{personalInfo.linkedin}</span>
          </div>
          <div className="info-item">
            <span className="info-label"><i className="fab fa-github"></i> GitHub:</span>
            <span className="info-value">{personalInfo.github}</span>
          </div>
          <div className="info-item">
            <span className="info-label"><i className="fas fa-map-marker-alt"></i> Ubicación:</span>
            <span className="info-value">{personalInfo.location}</span>
          </div>
        </div>
      </InfoCard>

      {/* Sobre Mí también en InfoCard */}
      <InfoCard title="Sobre Mí" icon="user-circle">
        <p className="about-text">{personalInfo.about}</p>
      </InfoCard>

      {/* Lenguajes en InfoCard */}
      <InfoCard title="Lenguajes de Programación" icon="code">
        <div className="skills-container">
          {skills.programming.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </InfoCard>

      {/* Idiomas en InfoCard */}
      <InfoCard title="Idiomas" icon="language">
        <div className="languages-container">
          {languages.map((language, index) => (
            <div key={index} className="language-item">
              <span className="language-name">{language.name}</span>
              <div className="language-level">
                <span className="level-text">{language.level}</span>
                <div className="level-dots">
                  {[...Array(5)].map((_, dotIndex) => (
                    <span 
                      key={dotIndex} 
                      className={`dot ${dotIndex < language.dots ? 'active' : ''}`}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfoCard>
    </section>
  );
};

export default Inicio;