import React, { useState } from 'react';
import '../App.css';

function Interview() {
  const [showContacts, setShowContacts] = useState(false);

  const handleClick = () => {
    setShowContacts(!showContacts);
  };

  return (
    <div className="interview-container">
      <h2 className="interview-heading">Skill Building & Guidance</h2>
      <p className="interview-description">
        Resources and mock interviews to prepare for core technical job roles.
      </p>

      <button onClick={handleClick} className="toggle-button">
        {showContacts ? 'Hide Contact Info' : 'Need Guidance or Study Material?'}
      </button>

      {showContacts && (
        <div className="contact-box">
          <h4>Contact Persons </h4>
          <ul>
            <li>
              <span className="highlighted-name">Harshavardhan</span><br/><br/>
              <strong>📧Email:</strong> <a href="mailto:harshavardhan.p@tarassolutions.com" className="contact-link">harshavardhan.p@tarassolutions.com</a><br />
              <strong>📱WhatsApp: </strong><a href="tel:+91 9384931363" className="contact-link">+91 9384931363</a>
            </li>
            <li>
              <span className="highlighted-name">Shriram</span><br/><br/>
              <strong>📧Email:</strong> <a href="mailto:shriram@tarassolutions.com" className="contact-link">shriram@tarassolutions.com</a><br />
              <strong>📱WhatsApp: </strong><a href="tel:+91 78455 50414" className="contact-link">+91 78455 50414 </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Interview;
