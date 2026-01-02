import React from "react";
import { useNavigate } from "react-router-dom";
import isoLogo from "../assets/ISO Badge...jpg";
import iesaLogo from "../assets/IESA BADGE (2).png";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="home">
        <div className="overlay-text">
          <h1>
            Powering the future of electronics with
            <span> hands-on learning & innovation</span>
          </h1>

          <p>
            Industry-ready training kits for VLSI, Embedded Systems & AI.
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/products-and-offerings")}
          >
            Our Products & Offerings
          </button>
        </div>
      </section>

      <section className="certifications-section">
        <div className="cert-card">
          <img src={isoLogo} alt="ISO Certified" />
          <h3>ISO 9001:2015 Certified</h3>
        </div>

        <div className="cert-card">
          <img src={iesaLogo} alt="IESA Member" />
          <h3>IESA Member</h3>
        </div>
      </section>
    </>
  );
}

export default Home;
