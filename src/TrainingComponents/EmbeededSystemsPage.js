import React from 'react';
import embeddedProgrammingImg from '../assets/embeeded systems.jpg';

function EmbeddedSystemsPage() {
  return (
    <div className="course-detail-container">
      {/* LEFT: Text Section */}
      <div className="course-text">
        <h2>Embedded System Design & Testing</h2>
        <p>
          Comprehensive training on embedded system programming, hardware architecture, and testing.
        </p>

        <h3>Core Topics:</h3>
        <ul>
          <li>Embedded C Programming</li>
          <li>ARM (Cortex-A53) / Intel Architecture / STM32 Processor</li>
          <li>FREERTOS</li>
          <li>Python Programming / Automation</li>
          <li>Linux Device Drivers & Static Method Insertion (I2C, SPI, UART, etc.)</li>
        </ul>
      </div>

      {/* RIGHT: Image Section */}
      <div className="course-image-group">
        <div className="image-box">
          <img src={embeddedProgrammingImg} alt="Embedded Programming" />
          <p className="img-label">Embedded Systems</p>
        </div>
       
      </div>
    </div>
  );
}

export default EmbeddedSystemsPage;
