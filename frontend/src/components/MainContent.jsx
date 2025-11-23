import Inicio from './sections/Inicio';
import Experiencia from './sections/Experiencia';
import Educacion from './sections/Educacion';
import Habilidades from './sections/Habilidades';
import Proyectos from './sections/Proyectos';
import Contacto from './sections/Contacto';
import '../styles/MainContent.css';

const MainContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Inicio />;
      case 'experiencia':
        return <Experiencia />;
      case 'educacion':
        return <Educacion />;
      case 'habilidades':
        return <Habilidades />;
      case 'proyectos':
        return <Proyectos />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio />;
    }
  };

  return (
    <main className="main-content">
      {renderSection()}
    </main>
  );
};

export default MainContent;