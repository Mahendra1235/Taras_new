import React from "react";
import FPGA from "../assets/Basic FPGA Evaluation Board.png";

function FPGAProductDetail({ onBack }) {
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
            <h1>Basic FPGA Evaluation Board</h1>
            <img src={FPGA} alt="Basic FPGA Evaluation Board" />
          </div>

          <div className="product-detail-content">
            <h4>Hands-on Digital Design Made Simple</h4>

            <p>
              The <strong>Basic FPGA Evaluation Board</strong> by Taras Systems and
              Solutions is a compact, versatile platform designed to accelerate
              learning and prototyping in digital logic, embedded systems, and
              hardware design. Whether you’re a student, researcher, or engineer,
              this board provides the perfect entry point into FPGA development.
            </p>

            <h3>Key Features</h3>
            <ul>
              <li>Central FPGA chip with accessible I/O headers</li>
              <li>USB interface for programming and communication</li>
              <li>Power LED and user-configurable LEDs for debugging</li>
              <li>Push-button switches for input testing</li>
              <li>GPIO pins for external device interfacing</li>
              <li>Serial communication connectivity options</li>
            </ul>

            <h3>Applications</h3>
            <ul>
              <li>Digital logic design experiments</li>
              <li>Embedded system prototyping</li>
              <li>Signal processing demonstrations</li>
              <li>Hardware accelerator development</li>
              <li>Academic coursework and lab training</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FPGAProductDetail;
