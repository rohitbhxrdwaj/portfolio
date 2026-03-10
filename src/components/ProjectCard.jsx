import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, imagePlaceholder }) => {
  return (
    <div className="project-card fade-in">
      <div className="project-image">
        <div className="image-placeholder">
          <span>{imagePlaceholder || 'Project Image'}</span>
        </div>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer" className="icon-link">
              <FaGithub size={20} />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer" className="icon-link">
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
