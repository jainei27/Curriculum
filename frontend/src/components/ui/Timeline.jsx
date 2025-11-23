import '../../styles/sections/Experiencia.css';

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-date">{item.date}</div>
          <div className="timeline-content">
            <h3>{item.position}</h3>
            <h4>{item.company}</h4>
            <ul>
              {item.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;