import { useNavigate } from "react-router-dom";
import { ArrowRight, Cpu, Brain, CircuitBoard, Target, Lightbulb, Rocket, Users, Award } from "lucide-react";
import heroBg from "../assets/artificial-intelligence-neural-network-visualization.jpg";
import vlsiImg from "../assets/vlsi.jpg";
import edgeAiImg from "../assets/EdgeAI.jpg";
import embeddedImg from "../assets/embeededimg.jpg";

function Home() {
  const navigate = useNavigate();

  const technologies = [
    { title: "VLSI Chip Design", img: vlsiImg, icon: Cpu, path: "/vlsi-course" },
    { title: "Embedded Systems", img: embeddedImg, icon: CircuitBoard, path: "/embedded-systems" },
        { title: "Edge AI", img: edgeAiImg, icon: Brain, path: "/aiml-course" },

  ];

  const visionItems = [
    { title: "Innovate", description: "Provide New Tools and Technology to skill Academic Engineers.", icon: Lightbulb },
    { title: "Integrate", description: "Find Opportunities in the Technology World and Enable Skilled Engineers.", icon: Users },
    { title: "Elevate", description: "Post Joining Tech World helping Engineers to Upskill to bridge the Skill Gap.", icon: Rocket },
  ];

  const missionItems = [
    "Accelerate product development through collaborative R&D and prototyping",
    "Build future-ready engineers through real-time, application-driven learning",
    "Foster creativity and problem-solving through a culture of innovation",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="home" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-gradient-overlay" />
        <div className="overlay-text">
          <div className="cert-badge">
            <Award size={16} />
            <span>ISO 9001:2015 Certified | IESA Member</span>
          </div>
          
          <h1>
            Powering the future of electronics with
            <span className="highlight-text"> hands-on learning & innovation</span>
          </h1>

          <p>
            Industry-ready training kits for VLSI, Embedded Systems & AI.
            Transform academic knowledge into real-world expertise.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn"
              onClick={() => navigate("/products-and-offerings")}
            >
              Our Products & Offerings
              <ArrowRight size={18} />
            </button>
         
          </div>
        </div>

        {/* <div className="floating-icons">
          <div className="float-icon"><Cpu size={28} /></div>
          <div className="float-icon"><Brain size={28} /></div>
          <div className="float-icon"><CircuitBoard size={28} /></div>
        </div> */}
        <div className="floating-icons">
  {/* VLSI */}
  <div
    className="float-icon"
    onClick={() => navigate("/vlsi-course")}
    title="VLSI Course"
    style={{ cursor: "pointer" }}
  >
    <Cpu size={28} />
  </div>

  {/* AI / ML */}
  <div
    className="float-icon"
    onClick={() => navigate("/aiml-course")}
    title="AI / ML Course"
    style={{ cursor: "pointer" }}
  >
    <Brain size={28} />
  </div>

  {/* Embedded Systems */}
  <div
    className="float-icon"
    onClick={() => navigate("/embedded-systems")}
    title="Embedded Systems Course"
    style={{ cursor: "pointer" }}
  >
    <CircuitBoard size={28} />
  </div>
</div>

      </section>

<div className="credentials-header">
  <h2>Our Credentials</h2>
  <p>Recognitions that reflect our commitment to quality and excellence</p>
</div>


      <section className="certifications-section">
        <div className="cert-card">
          <div className="cert-icon blue">
            <Award size={40} />
          </div>
          <h3>ISO 9001:2015 Certified</h3>
          <p>Quality Management System</p>
        </div>

        <div className="cert-card">
          <div className="cert-icon green">
            <Award size={40} />
          </div>
          <h3>IESA Member</h3>
          <p>India Electronics & Semiconductor Association</p>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="tech-solutions">
        <div className="section-header">
          <h2>Technology Solutions</h2>
          <p>Cutting-edge training and development in the most demanding domains of electronics</p>
        </div>

        <div className="tech-grid">
  {technologies.map((item, index) => (
    <div
      className="tech-card"
      key={index}
      onClick={() => navigate(item.path)}
      style={{ cursor: "pointer" }}
    >
      <img src={item.img} alt={item.title} />

      <div className="tech-overlay">
        <div className="tech-icon">
          <item.icon size={20} />
        </div>

        <h3>{item.title}</h3>

        <span className="explore-link">
          Explore Now <ArrowRight size={16} />
        </span>
      </div>
    </div>
  ))}
</div>

      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="vision">
          <div className="section-title">
            <div className="title-icon">
              <Target size={24} />
            </div>
            <h3>Our Vision</h3>
          </div>
          
          <div className="vision-cards">
            {visionItems.map((item, index) => (
              <div className="vision-card" key={index}>
                <div className="vision-icon">
                  <item.icon size={20} />
                </div>
                <div className="vision-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mission">
          <div className="section-title">
            <div className="title-icon">
              <Rocket size={24} />
            </div>
            <h3>Our Mission</h3>
          </div>
          
          <div className="mission-box">
            <ul>
              {missionItems.map((item, index) => (
                <li key={index}>
                  <span className="mission-number">{index + 1}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Engineering Career?</h2>
        <p>Join thousands of engineers who have upskilled with our industry-ready training programs</p>
        {/* <button className="hero-btn">
          Get Started Today
          <ArrowRight size={18} />
        </button> */}
        <button
  className="hero-btn"
  onClick={() => navigate("/contactus")}
>
  Get Started Today
  <ArrowRight size={18} />
</button>

      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Electronics Training Solutions. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
