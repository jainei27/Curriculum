import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { navigationItems } from './data/curriculumData';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Cargar sección activa desde localStorage al iniciar
  useEffect(() => {
    const savedSection = localStorage.getItem('activeSection');
    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);

  // Guardar sección activa en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="container">
      <Sidebar 
        activeSection={activeSection} 
        onNavigation={handleNavigation}
        navigationItems={navigationItems}
      />
      <MainContent activeSection={activeSection} />
    </div>
  );
}

export default App;