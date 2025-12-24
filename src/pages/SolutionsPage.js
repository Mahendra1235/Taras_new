import React, { useState } from 'react';

import VLSICoursePage from '../TrainingComponents/VLSICoursePage';
import AimlCoursePage from '../TrainingComponents/AimlCoursePage';
import EmbeddedSystemsPage from '../TrainingComponents/EmbeededSystemsPage';
import Interview from '../ProductComponents/Interview';
import TrainingKit from '../ProductComponents/TrainingKit';
import MenuTabs from './MenuTab';
import COEPage from './COEPage';
import Projects from './Projects';

import vlsi from '../assets/vlsi.jpg';
import embeddedsystems from '../assets/embeeded systems.jpg';
import aiml from '../assets/AI-ML Course Img...png';
import trainingkit from '../assets/training kit.jpg';
import interview from '../assets/interview.jpg';
import COE from '../assets/COE1.jpg';
import projectsImg from '../assets/ComingSoon.png';

const data = {
  training: [
    {
      key: 'vlsi',
      title: 'VLSI Design Methodologies',
      description: 'Covers Digital Design, RTL, and Verilog HDL for campus learners.',
      image: vlsi,
      component: VLSICoursePage,
    },
    {
      key: 'embedded',
      title: 'Embedded Systems',
      description: 'Intro to Embedded C, IoT hardware interfacing, and real-time OS.',
      image: embeddedsystems,
      component: EmbeddedSystemsPage,
    },
    {
      key: 'aiml',
      title: 'AI/ML Foundations',
      description: 'Covers Python, ML algorithms, and deployment pipelines.',
      image: aiml,
      component: AimlCoursePage,
    },
  ],
  products: [
    {
      key: 'trainingkit',
      title: 'Training Kits',
      description: 'Hands-on kits for real-time embedded and VLSI learning.',
      image: trainingkit,
      component: TrainingKit,
    },
    {
      key: 'interviewprep',
      title: 'Skill Building & Guidance',
      description: 'Mock interviews, aptitude, and domain-specific prep.',
      image: interview,
      component: Interview,
    },
  ],
  coe: [
    {
      key: 'coemain',
      title: 'Center of Excellence',
      description: 'Advanced R&D and project-based learning in VLSI, AI/ML, and Embedded Systems.',
      image: COE,
      component: COEPage,
    },
  ],
  projects: [
    {
      key: 'projects',
      title: 'Projects',
      description: 'This section showcases our project portfolio.',
      image: projectsImg,
      component: Projects,
    },
  ],
};

function SolutionsPage() {
  const [activeTab, setActiveTab] = useState('products');
  const [selectedCourseKey, setSelectedCourseKey] = useState(null);

  const currentCourses = data[activeTab] || [];
  const selectedCourse = currentCourses.find(item => item.key === selectedCourseKey);

  if (selectedCourse) {
    const CourseComponent = selectedCourse.component;
    return (
      <div className="solutions-container">
        <button className="back-button" onClick={() => setSelectedCourseKey(null)}>
          ← Back to {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </button>
        <CourseComponent />
      </div>
    );
  }

  return (
    <div className="solutions-container">
      <h1 className="solutions-title">Our Solutions</h1>
      <MenuTabs
        activeTab={activeTab}
        onTabChange={(key) => {
          setActiveTab(key);
          setSelectedCourseKey(null);
        }}
      />

      <div className="course-grid">
        {currentCourses.map(({ key, title, description, image }) => (
          <div key={key} className="course-card">
            <div className="card-image">
              <img src={image} alt={title} />
            </div>
            <div className="card-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <button
                className="explore-btn"
                onClick={() => setSelectedCourseKey(key)}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolutionsPage;
