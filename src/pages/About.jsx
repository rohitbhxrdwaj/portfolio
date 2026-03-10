import React from 'react';
import './About.css';

const About = () => {
  const frontendSkills = ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"];
  const otherSkills = ["Git", "GitHub", "VS Code", "Data Structures & Algorithms", "Responsive Design"];

  return (
    <div className="about-page fade-in">
      <div className="about-container">
        <h2>About <span className="highlight">Me</span></h2>
        
        <section className="about-story">
          <h3>My Story</h3>
          <p>
            I am Rohit Bhardwaj, a passionate MERN Stack Developer based in Kathua, Jammu & Kashmir. 
            Throughout my academic journey at Chandigarh University, I have dedicated myself to mastering full-stack web development. 
            I love building scalable, responsive, and user-centric applications, focusing heavily on clean and maintainable code.
          </p>
          <p>
            With a solid foundation in modern JavaScript frameworks and RESTful API development, I bridge the gap between front-end aesthetics and back-end logic. 
            I continuously explore new technologies to deliver impactful digital experiences and solve complex problems.
          </p>
        </section>

        <section className="about-skills">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                {frontendSkills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend & Database</h4>
              <ul>
                {backendSkills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools & Concepts</h4>
              <ul>
                {otherSkills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="about-education">
          <h3>Education & Certifications</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>B.E. Computer Science & Engineering</h4>
                <h5>Chandigarh University, Mohali</h5>
                <p className="timeline-date">2022 - 2026 | CGPA: 6.9</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Web Development Training</h4>
                <h5>Summer 2024</h5>
                <p>Learned MERN stack fundamentals and built mini-projects (portfolio, todo app, weather app).</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>The Complete Web Development Bootcamp</h4>
                <h5>Udemy</h5>
                <p>Covered full-stack web development (HTML, CSS, JS, Node.js, Express, MongoDB, React) in-depth.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-goals">
          <h3>Career Goals</h3>
          <p>
            My objective is to secure a challenging position in a reputed organization where I can showcase my technical abilities, contribute to innovative software solutions, and grow alongside industry leaders.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
