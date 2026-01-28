import React from 'react';
import vlsiDesignImg from '../assets/vlsi.jpg';
import vlsiDFTImg from '../assets/vlsidft.jpg';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function VLSICoursePage() {
    const navigate = useNavigate(); // ✅ FIX HERE

  return (
    <div className="media-page">

      {/* SECTION 1 – VLSI Design */}
      <section className="media-section accent-vlsi">
        <div className="media-image">
          <img src={vlsiDesignImg} alt="VLSI Design" />
        </div>

        <div className="media-content">
          <span className="media-tag">Semiconductor Engineering</span>

          <h2>VLSI Design & Chip Engineering</h2>
          <p>
            This program provides comprehensive exposure to VLSI and chip design,
            covering digital design, RTL development, verification, and SoC
            fundamentals. Learners gain an end-to-end understanding of the IC
            design flow—from specification and RTL coding to verification and
            fabrication awareness.
          </p>

          <ul>
            <li>VLSI Design Flow & Digital Electronics</li>
            <li>CMOS Technology & Semiconductor Fundamentals</li>
            <li>RTL Design using Verilog HDL</li>
            <li>SystemVerilog for Design & Verification</li>
            <li>Combinational & Sequential Logic Design</li>
            <li>Structured Testbench Architecture</li>
            <li>Open-source EDA Tool Exposure</li>
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

      {/* SECTION 2 – VLSI Verification / DFT (Reversed) */}
      <section className="media-section reverse accent-vlsi">
        <div className="media-image">
          <img src={vlsiDFTImg} alt="VLSI Verification & DFT" />
        </div>

        <div className="media-content">
          <span className="media-tag">Verification & Test</span>

          <h2>Verification, DFT & SoC Fundamentals</h2>
          <p>
            Advanced coverage of functional verification, design-for-testability,
            and system-level concepts required for modern SoC and FPGA-based
            designs in semiconductor products.
          </p>

          <ul>
            <li>UVM & Verification Methodologies</li>
            <li>Object-Oriented Programming in SystemVerilog</li>
            <li>Interprocess Communication & Randomization</li>
            <li>ASIC / SoC Design Concepts</li>
            <li>DFT Fundamentals – Scan, ATPG, BIST</li>
            <li>FPGA Architecture Basics</li>
            <li>Chip Fabrication Awareness</li>
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
       {/* <button
  className="hero-btn"
  onClick={() => navigate("/contactus")}
>
Reach us for More details
  <ArrowRight size={18} />
</button> */}

    </div>
  );
}

export default VLSICoursePage;
