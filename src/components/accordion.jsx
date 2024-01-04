// Accordion.js
import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion-item ${isActive ? 'active' : ''}`}>
      <div className={`accordion-header ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
        <i className={`fas ${isActive ? 'fa-chevron-up' : 'fa-chevron-down'} accordion-icon`}></i>
      </div>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
