import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, href, to, onClick, variant = 'primary', className = '', ...props }) => {
  const baseClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {text}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={baseClass} onClick={onClick} {...props}>
        {text}
      </Link>
    );
  }

  return (
    <button className={baseClass} onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default Button;
