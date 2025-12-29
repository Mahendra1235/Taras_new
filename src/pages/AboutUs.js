import React from 'react';
import FounderImage from '../assets/taras-image.jpg';
// import Iso14001 from '../assets/ISO.jpg';
// import Iso45001 from '../assets/IESA Membership.png';
const AboutUs = () => {
  return (
    <section className="about-container">
      <h1>About Us</h1>
      <p>
        At TARAS SYSTEMS AND SOLUTIONS, we specialize in cutting-edge product development and skill enhancement in core engineering domains. Our mission is to bridge the gap between emerging technologies and real-world applications by nurturing next-generation engineers and developing future-ready solutions.
      </p>
      <p>
        Over the past six years, we have collaborated with universities and industries to drive innovation through domain-specific R&D, hands-on technical mentorship, and advanced lab setups in areas like VLSI, FPGA, IoT, AI, Cloud Computing, RISC‑V, Embedded Systems, and Robotics.
      </p>

      <div className="founder">
        <div className="founder-content">
          <h2>About the Founder</h2>
          <p>
            TARAS SYSTEMS AND SOLUTIONS was founded by a team of seasoned professionals with over 25 years of experience in the engineering and technology ecosystem. The company is led by Dr. K. Thanushkodi, former Syndicate Member of Anna University, with a career spanning 40+ years across public and private engineering institutions.
          </p>
        </div>
        <img src={FounderImage} alt="Founder Dr.K.Thanushkodi" className="founder-img" />
      </div>

      
{/* <div className="certification-section">
  <h2><strong>Certifications</strong></h2>

  <div className="certification-item">
    <div className="certification-info">
      <h3>ISO 14001:2015</h3>
      <p><strong>Initial Certification:</strong> 15.11.2025</p>
      <p><strong>Valid Until:</strong> 14.11.2028</p>
      <p><strong>Issuing Authority:</strong> Veritas System Quality Certificates Issuing LLC</p>
    </div>

    <a href={Iso14001} target="_blank" rel="noopener noreferrer">
      <img src={Iso14001} alt="ISO 14001 Certificate" />
    </a>
  </div>

  <div className="certification-item">
    <div className="certification-info">
      <h3>IESA Membership</h3>
      <p><strong>Initial Certification:</strong> November-2025</p>
      <p><strong>Valid Until:</strong> March-2026</p>
      <p><strong>Issuing Authority:</strong> IESA</p>
    </div>

    <a href={Iso45001} target="_blank" rel="noopener noreferrer">
      <img src={Iso45001} alt="IESA Membership Certificate" />
    </a>
  </div>
</div> */}


      <div className="qualities">
        <h2>Our Approach</h2>
        <ul>
          <li>Product innovation backed by deep technical expertise</li>
          <li>Collaborative development with academic and industry partners</li>
          <li>Hands-on skill building through live projects and real-world problem solving</li>
        </ul>
      </div>

      <div className="vision-mission">
        <div className="vision">
          <h3>Our Vision</h3>
          <p><strong>Innovate - </strong> Provide New Tools and Technology to skill Academic Engineers.</p>
          <p><strong>Integrate - </strong> Find Opportunities in the Technology World and Enable Skilled Engineers.</p>
          <p><strong>Elevate - </strong> Post Joining Tech World helping Engineers to Upskill to bridge the Skill Gap.</p>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <ul>
            <li>Accelerate product development through collaborative R&D and prototyping</li>
            <li>Build future-ready engineers through real-time, application-driven learning</li>
            <li>Foster creativity and problem-solving through a culture of innovation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
