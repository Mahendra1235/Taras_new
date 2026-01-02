import React from "react";
import { useNavigate } from "react-router-dom";
import isoLogo from "../assets/ISO Badge...jpg";
import iesaLogo from "../assets/IESA BADGE (2).png";
import chipImg from "../assets/vlsi.jpg";
import edgeAiImg from "../assets/EdgeAI.jpg";
import embeddedImg from "../assets/embeededimg.jpg";

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

      {/* TECHNOLOGY SOLUTIONS */}
      <section className="tech-solutions">
        <h2>Technology Solutions</h2>

        <div className="tech-grid">
          {[
            { title: "VLSI Chip Design", img: chipImg },
            { title: "Edge AI", img: edgeAiImg },
            { title: "Embedded Systems", img: embeddedImg },
          ].map((item, index) => (
            <div className="tech-card" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="tech-overlay">
                <h3>{item.title}</h3>
                <span>Explore Now →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vision-mission">
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            <strong>Innovate - </strong> Provide New Tools and Technology to skill Academic Engineers.
          </p>
          <p>
            <strong>Integrate - </strong> Find Opportunities in the Technology World and Enable Skilled Engineers.
          </p>
          <p>
            <strong>Elevate - </strong> Post Joining Tech World helping Engineers to Upskill to bridge the Skill Gap.
          </p>
        </div>

        <div className="mission">
          <h3>Our Mission</h3>
          <ul>
            <li>Accelerate product development through collaborative R&D and prototyping</li>
            <li>Build future-ready engineers through real-time, application-driven learning</li>
            <li>Foster creativity and problem-solving through a culture of innovation</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
