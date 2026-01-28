import React from 'react';
import embeddedImg from '../assets/embeeded systems.jpg';
import iotImg from '../assets/iot.jpg';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function EmbeddedSystemsPage() {
              const navigate = useNavigate();
  
  return (
    <div className="media-page">

      {/* SECTION 1 – Embedded Systems */}
      <section className="media-section accent-embedded">
        <div className="media-image">
          <img src={embeddedImg} alt="Embedded Systems" />
        </div>

        <div className="media-content">
          <span className="media-tag">Embedded Systems</span>
          <h2>Embedded System Design & Testing</h2>
          <p>
            Engineering robust embedded platforms through hardware-aware
            firmware design, real-time operating systems, and system-level
            validation.
          </p>

          <ul>
            <li>Embedded C / C++ Programming</li>
            <li>ARM Cortex-A53, STM32 & Industrial MCUs</li>
            <li>FreeRTOS & Real-Time Concepts</li>
            <li>Peripheral Interfacing (I2C, SPI, UART)</li>
            <li>Linux Fundamentals & Device Drivers</li>
          </ul>
            <button
            className="hero-btn"
            onClick={() => navigate("/contactus")}
          >
          Reach us for More details
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* SECTION 2 – IoT (Reversed) */}
      <section className="media-section reverse accent-iot">
        <div className="media-image">
          <img src={iotImg} alt="IoT Systems" />
        </div>

        <div className="media-content">
          <span className="media-tag">Internet of Things</span>
          <h2>IoT Architecture & Connected Platforms</h2>
          <p>
            Designing scalable IoT systems from edge devices to cloud platforms,
            enabling secure data flow, automation, and real-world deployment.
          </p>

          <ul>
            <li>IoT Architecture & System Design</li>
            <li>MQTT, HTTP, CAN & Modbus</li>
            <li>Sensors, Actuators & Edge Devices</li>
            <li>Cloud Integration & Data Pipelines</li>
            <li>Security & Reliability Fundamentals</li>
          </ul>
            <button
            className="hero-btn"
            onClick={() => navigate("/contactus")}
          >
          Reach us for More details
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
}

export default EmbeddedSystemsPage;
