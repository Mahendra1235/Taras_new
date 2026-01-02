import React from "react";
import IOT from "../assets/iot.jpg";

function IoTProductDetail({ onBack }) {
  return (
    <>
      {/* Page-specific H1 styling */}
      <style>{`
        .product-detail-image h1 {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 18px;
          line-height: 1.2;
          text-align: center;
          position: relative;
        }

        .product-detail-image h1::after {
          content: "";
          display: block;
          width: 600px;
          height: 4px;
          margin: 12px auto 0;
          background: linear-gradient(90deg, #2563eb, #22c55e);
          border-radius: 10px;
        }
      `}</style>

      <div className="product-detail-container">
        <button className="back-button" onClick={onBack}>
          ← Back to Products
        </button>

        <div className="product-detail">
          <div className="product-detail-image">
            <h1>IoT Lab Infrastructure Solutions</h1>
            <img src={IOT} alt="IoT Lab Infrastructure Solutions" />
          </div>

          <div className="product-detail-content">
            <h4>Empowering Smart Innovation</h4>

            <p>
              At <strong>Taras Systems and Solutions</strong>, we architect
              scalable, secure, and modular IoT lab environments designed to
              accelerate learning, prototyping, and deployment across academia
              and industry. Our solutions integrate cutting-edge hardware,
              cloud connectivity, and real-time analytics to support diverse
              IoT applications.
            </p>

            <h3>What We Offer</h3>
            <ul>
              <li>Modular lab setup with MCU kits, sensors, and edge devices</li>
              <li>Protocol-ready interfaces: Wi-Fi, BLE, Zigbee, LoRa</li>
              <li>Ethernet, UART, I2C, SPI, and display-ready boards</li>
              <li>Cloud dashboards and real-time data visualization</li>
              <li>Secure gateways for monitoring and analytics</li>
              <li>Hands-on training, faculty enablement, and workshops</li>
              <li>Custom branding and Centre of Excellence deployment support</li>
            </ul>

            <h3>Applications Enabled</h3>
            <ul>
              <li>Smart Agriculture</li>
              <li>Industrial IoT & Predictive Maintenance</li>
              <li>Smart Energy & HVAC Systems</li>
              <li>Healthcare Monitoring & Wearables</li>
              <li>Logistics & Asset Tracking</li>
              <li>Smart Campus & Home Automation</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default IoTProductDetail;
