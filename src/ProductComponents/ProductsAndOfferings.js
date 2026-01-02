import React, { useState } from "react";
import FPGA from "../assets/fpga.jpg";
import RISCV from "../assets/riscv.jpg";
import IOT from "../assets/iot.jpg";
import FPGAProductDetail from "./FPGAProductDetail";
import RISCVProductDetail from "./RISCVProductDetail";
import IoTProductDetail from "./IOTProductDetail";

function ProductsAndOfferings() {
  const [activeProduct, setActiveProduct] = useState(null);

   if (activeProduct === "fpga") {
    return <FPGAProductDetail onBack={() => setActiveProduct(null)} />;
  }

  if (activeProduct === "riscv") {
    return <RISCVProductDetail onBack={() => setActiveProduct(null)} />;
  }

  if (activeProduct === "iot") {
    return <IoTProductDetail onBack={() => setActiveProduct(null)} />;
  }

  return (
    <section className="home-products" id="products-offerings">
      <div className="products-grid">
        {/* FPGA */}
        <div className="product-card">
          <img src={FPGA} alt="Basic FPGA Evaluation Board" />
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

          <span
            className="learn-more"
            onClick={() => setActiveProduct("fpga")}
          >
            Explore →
          </span>
        </div>

        {/* RISC-V */}
        <div className="product-card">
          <img src={RISCV} alt="RISC-V IP Evaluation Board" />
          <h3>RISC-V IP Evaluation Board</h3>
          <p>
            Learn modern processor design and embedded systems programming with
            our RISC-V boards.
          </p>
          <ul>
            <li>MCU and peripherals integration</li>
            <li>PCB-based real-world applications</li>
            <li>Software-hardware interfacing exercises</li>
          </ul>
  <span className="learn-more" onClick={() => setActiveProduct("riscv")}>
            Explore →
          </span>
                  </div>

        {/* IoT */}
        <div className="product-card">
          <img src={IOT} alt="IoT & Edge AI Lab Solutions" />
          <h3>IoT & Edge AI Lab Solutions</h3>
          <p>
            Deploy IoT and AI at the edge using sensors, accelerators, and vision
            processing units.
          </p>
          <ul>
            <li>Edge AI inference & deployment</li>
            <li>IoT connectivity & cloud integration</li>
            <li>Vision & sensor-based labs</li>
          </ul>
 <span className="learn-more" onClick={() => setActiveProduct("iot")}>
            Explore →
          </span>
                  </div>
      </div>
    </section>
  );
}

export default ProductsAndOfferings;
