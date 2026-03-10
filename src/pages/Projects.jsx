import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const allProjects = [
    {
      title: "Authentication Dashboard",
      description: "A full-stack authentication system with a user dashboard. Includes user signup/login, protected routes, and secure password hashing.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "ShopSphere - E-Commerce Platform",
      description: "A full-stack e-commerce platform featuring secure authentication, extensive product catalog, shopping cart, and seamless checkout workflow.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      githubLink: "https://github.com/rohitbhxrdwaj/shopsphere",
      liveLink: "#"
    },
    {
      title: "Weather App",
      description: "A responsive weather application that leverages the OpenWeather API to provide real-time weather data with city-based search functionality.",
      techStack: ["React", "Tailwind CSS", "OpenWeather API"],
      githubLink: "https://github.com/rohitbhxrdwaj/weather-app",
      liveLink: "#"
    },
    {
      title: "Todo List App",
      description: "A task manager application with comprehensive CRUD capabilities, featuring 'All', 'Completed', and 'Pending' filters to stay organized.",
      techStack: ["React", "LocalStorage", "CSS3"],
      githubLink: "https://github.com/rohitbhxrdwaj/todo-app",
      liveLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive, dark-themed personal portfolio showcasing my developer journey, skills, and featured projects with smooth animations.",
      techStack: ["React", "Vite", "Vanilla CSS", "React Router"],
      githubLink: "https://github.com/rohitbhxrdwaj/portfolio",
      liveLink: "https://rohitbhardwaj.dev"
    }
  ];

  return (
    <div className="projects-page fade-in">
      <div className="projects-container">
        <h2>My <span className="highlight">Projects</span></h2>
        <p className="projects-intro">
          A showcase of my recent full-stack applications and front-end projects demonstrating my expertise across the MERN stack.
        </p>
        
        <div className="projects-grid-full">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} imagePlaceholder={project.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
