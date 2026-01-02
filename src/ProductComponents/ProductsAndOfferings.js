import React from "react";
import FPGA from "../assets/fpga.jpg";
import RISCV from "../assets/riscv.jpg";
import IOT from "../assets/iot.jpg";

function ProductsAndOfferings() {
  return (
    <section className="home-products" id="products-offerings">
      <div className="products-header">
        {/* <h2>Our Products & Offerings</h2> */}
        {/* <p>
          Innovative hands-on solutions for students, professionals, and
          institutions to build real-world skills in electronics, embedded
          systems, and IoT.
        </p> */}
      </div>

      <div className="products-grid">
        <div className="product-card">
          <img src={FPGA} alt="VLSI Training Kits" />
          <h3>Basic FPGA Evaluation Board</h3>
          <p>
            Explore digital design from RTL to silicon. Our FPGA kits provide
            practical experience with HDL coding, simulation, and hardware
            implementation.
          </p>
          <ul>
            <li>RTL design & simulation</li>
            <li>Hardware prototyping</li>
            <li>Hands-on labs & exercises</li>
          </ul>
          <span className="learn-more">Explore →</span>
        </div>

        <div className="product-card">
          <img src={RISCV} alt="Embedded Kits" />
          <h3>RISC-V IP Evaluation Board</h3>
          <p>
            Learn modern processor design and embedded systems programming with
            our RISC-V boards. Ideal for understanding MCU architectures and
            software-hardware co-design.
          </p>
          <ul>
            <li>MCU and peripherals integration</li>
            <li>PCB-based real-world applications</li>
            <li>Software-hardware interfacing exercises</li>
          </ul>
          <span className="learn-more">Explore →</span>
        </div>

        <div className="product-card">
          <img src={IOT} alt="IoT and AI Hardware Kits" />
          <h3>IoT & Edge AI Lab Solutions</h3>
          <p>
            Deploy IoT and AI at the edge. Build solutions with sensors,
            accelerators, and vision processing units to solve real-world
            problems.
          </p>
          <ul>
            <li>Edge AI inference & deployment</li>
            <li>IoT connectivity & cloud integration</li>
            <li>Vision, sensor & accelerator based labs</li>
          </ul>
          <span className="learn-more">Explore →</span>
        </div>
      </div>
    </section>
  );
}

export default ProductsAndOfferings;
