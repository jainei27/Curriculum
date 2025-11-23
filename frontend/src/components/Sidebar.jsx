import { curriculumData } from '../data/curriculumData';
import '../styles/Sidebar.css';

const Sidebar = ({ activeSection, onNavigation, navigationItems }) => {
  const { personalInfo } = curriculumData;

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-image-container">
          <img src="/foto_perfil.jpg" alt="Foto de perfil" className="profile-image" />
        </div>
        <h1 className="profile-name">{personalInfo.name}</h1>
        <p className="profile-title">{personalInfo.title}</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigation(item.id);
                }}
              >
                <i className={`fas fa-${item.icon}`}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/jainer-mendoza-615589396/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a 
            href="https://github.com/jainei27" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a 
            href="https://www.instagram.com/jainergallego?igsh=MXZ1N3dycTV6bWNyeQ==" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="copyright">© 2025 - Todos los derechos reservados</p>
      </div>
    </aside>
  );
};

export default Sidebar;
