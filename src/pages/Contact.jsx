import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ ...status, error: 'Please fill in all fields.' });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    emailjs.sendForm(
      "service_f6aq3wm",
      "template_bttvwfm",
      form.current,
      "1A80iZnxmcv-VB_m2"
    )
    .then(
      () => {
        console.log("Message sent successfully");
        alert("Message sent successfully!");
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send message.");
        setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again later.' });
      }
    );
  };

  return (
    <div className="contact-page fade-in">
      <div className="contact-container">
        <h2>Get In <span className="highlight">Touch</span></h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p className="contact-text">
              I am currently open to exciting opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>bhardwajrohit9294@gmail.com</span>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <span>+91 7006892717</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>Kathua, Jammu & Kashmir</span>
            </div>

            <div className="contact-social">
              <h4>Find me on</h4>
              <div className="social-links">
                <a href="https://github.com/rohitbhxrdwaj" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/rohit-bhardwaj/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaLinkedin size={22} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaTwitter size={22} />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            {status.error && <div className="form-error" style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem' }}>{status.error}</div>}
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Write your message here..."
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            
            <Button 
              text={status.loading ? 'Sending...' : (status.success ? 'Message sent successfully!' : 'Send Message')} 
              variant="primary" 
              type="submit" 
              disabled={status.loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
