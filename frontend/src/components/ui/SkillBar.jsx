import { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import '../../styles/sections/Inicio.css';

const SkillBar = ({ name, level }) => {
  const skillBarRef = useRef(null);
  const isVisible = useIntersectionObserver(skillBarRef, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <div className="skill-item">
      <span className="skill-name">{name}</span>
      <div className="skill-bar">
        <div 
          ref={skillBarRef}
          className="skill-level" 
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            transition: `width 1.5s ease-in-out ${name.length * 0.1}s`
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;