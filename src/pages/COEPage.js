import React from 'react';
import {
  Cpu,
  Brain,
  Microchip,
  Briefcase,
  Users,
  Building2,
  Rocket,
  Mail
} from 'lucide-react';

function COEPage() {
  return (
    <div className="coe-page">
      {/* HEADER */}
      <div className="coe-header">
        <h2>Center of Excellence (COE)</h2>
        <p>
          Our Centers of Excellence (COEs) serve as innovation hubs that bridge
          academia, industry, and advanced research to build future-ready talent
          and scalable technology solutions.
        </p>
      </div>

      {/* FOCUS AREAS */}
      <section className="coe-section">
        <h3>Key Focus Areas</h3>

        <div className="coe-cards">
          <div className="coe-card">
            <Cpu size={32} />
            <h4>VLSI Research Lab</h4>
            <p>
              Industry-aligned RTL-to-GDSII design flow, SoC architecture,
              verification, and hands-on semiconductor research projects.
            </p>
          </div>

          <div className="coe-card">
            <Brain size={32} />
            <h4>AI / ML Innovation Hub</h4>
            <p>
              Model development, deep learning, MLOps pipelines, and
              data-driven decision systems for real-world applications.
            </p>
          </div>

          <div className="coe-card">
            <Microchip size={32} />
            <h4>Embedded & IoT Lab</h4>
            <p>
              Microcontroller programming, real-time operating systems,
              sensor integration, and connected device solutions.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="coe-section">
        <h3>What We Offer</h3>

        <div className="coe-offerings">
          <div className="offering-item">
            <Briefcase size={20} />
            <span>Live Industry Projects & Internships</span>
          </div>

          <div className="offering-item">
            <Users size={20} />
            <span>Expert Talks & Advanced Technical Workshops</span>
          </div>

          <div className="offering-item">
            <Building2 size={20} />
            <span>State-of-the-art Labs & Infrastructure</span>
          </div>

          <div className="offering-item">
            <Rocket size={20} />
            <span>Startup Incubation & Innovation Support</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="coe-contact">
        <Mail size={18} />
        <p>
          Interested in collaboration or partnerships?
          <a href="mailto:HR@tarassolutions.com"> HR@tarassolutions.com</a>
        </p>
      </div>
    </div>
  );
}

export default COEPage;
