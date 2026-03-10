import React from 'react';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const featuredProjects = [
    {
      title: "Authentication Dashboard",
      description: "A full-stack authentication system with a user dashboard. Includes user signup/login, protected routes, and secure password hashing.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "ShopSphere - E-Commerce Platform",
      description: "A full-stack e-commerce platform with authentication, product catalog, and shopping cart.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      githubLink: "https://github.com/rohitbhxrdwaj"
    },
    {
      title: "Weather App",
      description: "Responsive app to fetch real-time weather data with city-based search displaying temperature, humidity, and weather icons.",
      techStack: ["React", "Tailwind CSS", "OpenWeather API"],
      githubLink: "https://github.com/rohitbhxrdwaj"
    }
  ];

  const topSkills = ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"];

  return (
    <div className="home-page fade-in">
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Rohit Bhardwaj</span>
          </h1>
          <h2>Full Stack MERN Developer</h2>
          <p className="hero-intro">
            Passionate and results-driven software engineer skilled in building scalable, responsive, and user-centric web applications. Focused on writing clean and efficient code to deliver impactful digital experiences.
          </p>
          <div className="hero-buttons">
            <Button text="View Projects" to="/projects" variant="primary" />
            <Button text="Contact Me" to="/contact" variant="outline" />
            <Button text="Download Resume" href="/Rohit's Resume.pdf" variant="secondary" download />
          </div>
        </div>
      </section>

      <section className="tech-stack-section">
        <h2>Core <span className="highlight">Skills</span></h2>
        <div className="skills-container wrapper">
          {topSkills.map((skill, index) => (
            <div key={index} className="skill-badge">{skill}</div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured <span className="highlight">Projects</span></h2>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} imagePlaceholder={project.title} />
          ))}
        </div>
        <div className="view-more-container">
          <Button text="View All Projects" to="/projects" variant="outline" />
        </div>
      </section>
    </div>
  );
};

export default Home;
