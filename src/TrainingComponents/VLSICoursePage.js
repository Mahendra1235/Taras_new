import React from 'react';
import vlsiDesignImg from '../assets/vlsi.jpg';
import vlsiDFTImg from '../assets/vlsidft.jpg';

function VLSICoursePage() {
  return (
    <div className="course-detail-container">
      {/* LEFT: Text Section */}
      <div className="course-text">
        <h2>VLSI Design Methodologies</h2>
        <p>Covers Digital Design, RTL, and Verilog HDL for campus learners.</p>

        <h3>VLSI - Design:</h3>
        <ul>
          <li>ASIC/SOC/Digital Fundamentals and Concepts</li>
          <li>RTL Design</li>
          <li>Digital Verification</li>
          <li>FPGA Design and Development</li>
          <li>Formal Verification</li>
          <li>CPU Verification</li>
          <li>High Speed Protocols</li>
          <li>Mixed Signal Verification</li>
          <li>RTL Quality – Lint/CDC</li>
          <li>RISC-V Technology</li>
        </ul>

        <h3>VLSI – DFT:</h3>
        <ul>
          <li>ASIC/SOC Design Concepts</li>
          <li>Why DFT?</li>
          <li>DFT Concepts and Fundamentals</li>
          <li>BIST</li>
          <li>SCAN</li>
          <li>MBIST</li>
          <li>LBIST</li>
          <li>JTAG Interface</li>
          <li>ATPG</li>
          <li>DFT Simulations</li>
        </ul>
      </div>

      {/* RIGHT: Image Section */}
      <div className="course-image-group">
        <div className="image-box">
          <img src={vlsiDesignImg} alt="VLSI Design" />
          <p className="img-label">VLSI Design</p>
        </div>
        <div className="image-box">
          <img src={vlsiDFTImg} alt="VLSI DFT" />
          <p className="img-label">VLSI DFT</p>
        </div>
      </div>
    </div>
  );
}

export default VLSICoursePage;
