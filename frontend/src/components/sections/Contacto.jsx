import { useState } from 'react';
import { curriculumData } from '../../data/curriculumData';
import emailjs from 'emailjs-com';
import '../../styles/sections/Contacto.css';

const Contacto = () => {
  const { personalInfo } = curriculumData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_fvflfq9',
    TEMPLATE_ID: 'template_5cgx8ka',  
    PUBLIC_KEY: 'ROTOBI0XJJNsRpdOm'
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name)) {
      newErrors.name = 'El nombre solo puede contener letras';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'name' && value !== '' && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) {
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    if (submitStatus) {
      setSubmitStatus('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // PARÁMETROS ACTUALIZADOS - COINCIDEN EXACTAMENTE CON TU PLANTILLA
      const templateParams = {
        name: formData.name,         // ← Para {[name]}
        email: formData.email,       // ← Para {[email]}  
        matter: formData.subject,    // ← Para {[matter]}
        message: formData.message    // ← Para {[message]}
      };

      console.log('Enviando con estos parámetros:', templateParams);

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error detallado:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="content-section">
      <div className="section-header">
        <h2>Contacto</h2>
        <div className="header-line"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Información de Contacto</h3>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <p>Teléfono</p>
              <span>{personalInfo.phone}</span>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <p>Email</p>
              <span>{personalInfo.email}</span>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p>Ubicación</p>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="contact-social">
            <a href="https://www.linkedin.com/in/jainer-mendoza-615589396/" className="social-btn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/jainei27" className="social-btn">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://wa.me/qr/6P3IYBIRODCLI1" className="social-btn">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/jainergallego?igsh=MXZ1N3dycTV6bWNyeQ==" className="social-btn">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Envíame un Mensaje</h3>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              ✅ ¡Mensaje enviado con éxito! Te contactaré pronto.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="error-message-general">
              ❌ Error al enviar. Por favor, intenta nuevamente.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Nombre" 
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                name="subject"
                placeholder="Asunto" 
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'error' : ''}
                disabled={isSubmitting}
              />
              {errors.subject && <span className="error-text">{errors.subject}</span>}
            </div>
            
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Mensaje" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                disabled={isSubmitting}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Enviando...
                </>
              ) : (
                'Enviar Mensaje'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;