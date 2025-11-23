import { useState } from 'react';
import { curriculumData } from '../../data/curriculumData';
import { FaGraduationCap, FaChartBar, FaPalette, FaEye, FaTimes } from 'react-icons/fa';
import '../../styles/sections/Educacion.css';

const Certificaciones = () => {
  const { education } = curriculumData;
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificate = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  // Mapeo de iconos
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'graduation-cap': return <FaGraduationCap />;
      case 'chart-bar': return <FaChartBar />;
      case 'palette': return <FaPalette />;
      default: return <FaGraduationCap />;
    }
  };

  return (
    <section id="educacion" className="content-section">
      <div className="section-header">
        <h2>Certificaciones & Cursos</h2>
        <div className="header-line"></div>
      </div>

      {/* DISEÑO EN BLOQUES DE CERTIFICADOS */}
      <div className="certificates-grid">
        {education.map((cert, index) => (
          <div key={index} className="certificate-card">
            
            {/* IMAGEN DEL CERTIFICADO - VISIBLE DIRECTAMENTE */}
            <div className="certificate-image-container">
              {cert.certificateUrl && cert.certificateUrl !== "#" ? (
                <img 
                  src={cert.certificateUrl} 
                  alt={`Certificado ${cert.title}`}
                  className="certificate-img"
                  onClick={() => openCertificate(cert)}
                />
              ) : (
                <div className="certificate-placeholder">
                  {getIcon(cert.icon)}
                  <p>Certificado no disponible</p>
                </div>
              )}
            </div>

            {/* INFORMACIÓN DEL CERTIFICADO */}
            <div className="certificate-info">
              <div className="certificate-header">
                {getIcon(cert.icon)}
                <div>
                  <h3>{cert.title}</h3>
                  <span className="certificate-institution">{cert.institution}</span>
                </div>
              </div>
              
              <p className="certificate-date">{cert.date}</p>
              <p className="certificate-description">{cert.description}</p>
              
              <div className="certificate-skills">
                {cert.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>

              {cert.certificateUrl && cert.certificateUrl !== "#" && (
                <button 
                  onClick={() => openCertificate(cert)}
                  className="view-certificate-btn"
                >
                  <FaEye /> Ver Completo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar certificado completo */}
      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeCertificate}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedCertificate.title}</h3>
              <button className="close-button" onClick={closeCertificate}>
                <FaTimes />
              </button>
            </div>
            
            <div className="certificate-view">
              <img 
                src={selectedCertificate.certificateUrl} 
                alt={selectedCertificate.title}
                className="certificate-image"
              />
            </div>

            <div className="modal-footer">
              <button className="close-btn" onClick={closeCertificate}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificaciones;