import '../../styles/sections/Inicio.css';

const InfoCard = ({ title, icon, children, className = '' }) => {
  return (
    <div className={`info-card ${className}`}>
      <h3>
        <i className={`fas fa-${icon}`}></i> {title}
      </h3>
      {children}
    </div>
  );
};

export default InfoCard;