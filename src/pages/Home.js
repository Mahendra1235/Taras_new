import React from 'react';
import isoLogo from '../assets/ISO Badge...jpg';
import iesaLogo from '../assets/IESA BADGE (2).png';

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="home">
        <div className="overlay-text">
          <h1>
            With decades of experience in electronics, we’re fueling the
            software-driven future of global industries.
          </h1>
          <p>
            <strong>
              Your success starts here — explore our solutions and services.
            </strong>
          </p>
        </div>
      </section>

      <section className="certifications-section">
        <div className="cert-card">
          <img src={isoLogo} alt="ISO 9001:2015 Certified" />
          <h3 className="iso-text">ISO 9001:2015 Certified</h3>
        </div>

        <div className="cert-card">
          {/* <img src={iesaLogo} alt="IESA Member" className='iesa-img' /> */}
          <img src={iesaLogo} alt="IESA Member" />
          <h3 className="iesa-text">IESA Member</h3>
        </div>
      </section>
    </>
  );
}

export default Home;
