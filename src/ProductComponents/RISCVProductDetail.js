import React from "react";
import RISCV from "../assets/RISCV IP Evaluation Board.png";

function RISCVProductDetail({ onBack }) {
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
          margin: 10px auto 0;
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
            <h1>RISC-V IP Evaluation Board</h1>
            <img src={RISCV} alt="RISC-V IP Evaluation Board" />
          </div>

          <div className="product-detail-content">
            <h4>Open-Source Innovation, Simplified</h4>

            <p>
              The <strong>RISC-V IP Evaluation Board</strong> by Taras Systems and
              Solutions is a versatile platform built to accelerate exploration
              of the RISC-V architecture. With a modular design and
              industry-standard interfaces, it enables students, researchers,
              and engineers to prototype, validate, and deploy RISC-V based
              solutions with ease.
            </p>

            <h3>Key Features</h3>
            <ul>
              <li>Central RISC-V processor core with accessible I/O headers</li>
              <li>Ethernet port for networked applications and cloud connectivity</li>
              <li>USB interface for programming and debugging</li>
              <li>UART, SPI, and I2C communication options</li>
              <li>GPIO pins for external device interfacing</li>
              <li>Display connector for visualization and HMI development</li>
              <li>On-board user LED and push-button for testing</li>
              <li>3.3V regulated power supply with PWR LED indicator</li>
            </ul>

            <h3>Applications</h3>
            <ul>
              <li>Processor architecture exploration and teaching</li>
              <li>Embedded system prototyping with RISC-V cores</li>
              <li>IoT and edge computing demonstrations</li>
              <li>Hardware accelerator and co-processor integration</li>
              <li>Academic coursework, lab training, and research projects</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default RISCVProductDetail;
