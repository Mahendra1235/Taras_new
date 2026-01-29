import React, { useState } from 'react';

import VLSICoursePage from '../TrainingComponents/VLSICoursePage';
import AimlCoursePage from '../TrainingComponents/AimlCoursePage';
import EmbeddedSystemsPage from '../TrainingComponents/EmbeededSystemsPage';

import MenuTabs from './MenuTab';
import COEPage from './COEPage';
import Projects from './Projects';

import vlsi from '../assets/vlsi.jpg';
import embeddedsystems from '../assets/embeeded systems.jpg';
import aiml from '../assets/AI-ML Course Img...png';

import COE from '../assets/COE1.jpg';
import projectsImg from '../assets/ComingSoon.png';
import ProductsAndOfferings from '../ProductComponents/ProductsAndOfferings';

// Academic association logos
import extraImage1 from '../assets/College logos/Lakireddy Balireddy College(LBRCE)  Logo.jpg';
import extraImage2 from '../assets/College logos/Hindustan.jpg';
import extraImage3 from '../assets/College logos/Knowledge.png';
import extraImage4 from '../assets/College logos/eswari.jpg';
import extraImage5 from '../assets/College logos/karpagam.jpg';
import extraImage6 from '../assets/College logos/kl-university-logo.png';
import extraImage7 from '../assets/College logos/loyola.jpg';
import extraImage8 from '../assets/College logos/m.kumaraswamy.png';
import extraImage9 from '../assets/College logos/panimalar.jpg';
import extraImage10 from '../assets/College logos/psr.jpg';
import extraImage11 from '../assets/College logos/rajalakshmi.png';
import extraImage12 from '../assets/College logos/reva-uni.jpg';
import extraImage13 from '../assets/College logos/sairam.jpg';
import extraImage14 from '../assets/College logos/sri venkateswara.png';
import extraImage15 from '../assets/College logos/srm.png';
import extraImage16 from '../assets/College logos/veltech.jpg';

const extraImages = [
  { src: extraImage1, alt: 'LBRCE' },
  { src: extraImage2, alt: 'Hindustan' },
  { src: extraImage3, alt: 'Knowledge Institute' },
  { src: extraImage4, alt: 'Easwari Engineering College' },
  { src: extraImage5, alt: 'Karpagam' },
  { src: extraImage6, alt: 'KL University' },
  { src: extraImage7, alt: 'Loyola' },
  { src: extraImage8, alt: 'Kumaraswamy' },
  { src: extraImage9, alt: 'Panimalar' },
  { src: extraImage10, alt: 'PSR' },
  { src: extraImage11, alt: 'Rajalakshmi' },
  { src: extraImage12, alt: 'REVA University' },
  { src: extraImage13, alt: 'Sairam' },
  { src: extraImage14, alt: 'Sri Venkateswara' },
  { src: extraImage15, alt: 'SRM' },
  { src: extraImage16, alt: 'Veltech' },
];

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
      description:
        'Intro to Embedded C, IoT hardware interfacing, and real-time OS using ARM, IoT and RTOS.',
      image: embeddedsystems,
      component: EmbeddedSystemsPage,
    },
    {
      key: 'aiml',
      title: 'Edge AI',
      description: 'Covers Python, ML algorithms, and deployment pipelines.',
      image: aiml,
      component: AimlCoursePage,
    },
  ],
  coe: [
    {
      key: 'coemain',
      title: 'Center of Excellence',
      description:
        'Advanced R&D and project-based learning in VLSI, AI/ML, and Embedded Systems.',
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
  const selectedCourse = currentCourses.find(
    item => item.key === selectedCourseKey
  );

  // Individual course view
  if (selectedCourse) {
    const CourseComponent = selectedCourse.component;
    return (
      <div className="solutions-container">
        <button
          className="back-button"
          onClick={() => setSelectedCourseKey(null)}
        >
          ← Back to {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </button>
        <CourseComponent />
      </div>
    );
  }

  return (
    <div className="solutions-container">
      {/* Tabs */}
      <div className="solutions-tabs-wrapper">
        <MenuTabs
          activeTab={activeTab}
          onTabChange={key => {
            setActiveTab(key);
            setSelectedCourseKey(null);
          }}
        />
      </div>

      {/* Products */}
      {activeTab === 'products' && <ProductsAndOfferings />}

      {/* Training / COE / Projects cards */}
      {activeTab !== 'products' && (
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
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Academic Associations – TRAINING ONLY */}
      {activeTab === 'training' && (
        <>
          <h3 className="course-grid-h1">Our Academic Associations</h3>

          <div className="about-images-marquee">
            <div className="about-images-track">
              {extraImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="about-extra-image"
                />
              ))}

              {/* Duplicate for seamless loop */}
              {extraImages.map((img, i) => (
                <img
                  key={i + extraImages.length}
                  src={img.src}
                  alt={img.alt}
                  className="about-extra-image"
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SolutionsPage;
