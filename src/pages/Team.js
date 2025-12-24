import React from 'react';
import MadhavanProfile from '../assets/Team/Madhavapandian Photo id.jpg';
import VenkateshProfile from '../assets/Team/Venkatesh Photo id.jpeg';

const teamMembers = [
  {
    name: 'Madhava Pandian',
    role: 'Embedded Systems & IOT ',
    image: MadhavanProfile,
    bio: 'Ph.D. in Electrical Engineering with 14+ years in Embedded Systems & IoT. Director at Taras Systems, specializing in RTOS, Linux kernel, device drivers, and AI for edge. Has trained 7000+ students and conducted FDPs across 60+ institutions.'
  },

{
    name: 'Venkatesh Rajakutti',
    role: 'VLSI, Software & AI/ML',
    image: VenkateshProfile,
    bio: 'VLSI & software expert with 13+ years of experience in RTL design, UVM, Verilog/SystemVerilog, and semiconductor protocols. Skilled in C/C++, Java, Python, and AI/ML with 580+ real-time projects. Trained 6000+ students and led 60+ academic programs.'
  },
  
];

function Team() {
  return (
    <div className="team-page">
      <h1>Meet Our <strong>Expert Team</strong></h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-img" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
