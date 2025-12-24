import React from 'react';
import cloudComputingImg from '../assets/aiml.png';

function AimlCoursePage() {
  return (
    <div className="course-detail-container">
      {/* LEFT: Text Section */}
      <div className="course-text">
        <h2>AI/ML Foundations</h2>
        <p>In-depth coverage of cloud, automation, programming, data analytics, and AI/ML technologies.</p>

        <h3>Core Topics:</h3>
        <ul>
          <li>Cloud Computing: AWS, GCP, Azure & Container Tools (Docker, Kubernetes)</li>
          <li>Automation & Scripting Languages</li>
          <li>CI/CD Pipeline</li>
          <li>Python & Automation Concepts – C++ / Java</li>
          <li>Power BI & Data Analytics</li>
          <li>AI & Machine Learning</li>
          <li>Regression & Algorithms</li>
          <li>Deep Learning (DL)</li>
          <li>Artificial Neural Network (ANN)</li>
          <li>Convolutional Neural Network (CNN)</li>
          <li>Recurrent Neural Network (RNN)</li>
          <li>Long Short-Term Memory (LSTM)</li>
          <li>Natural Language Processing (NLP)</li>
        </ul>
      </div>

      {/* RIGHT: Image Section */}
      <div className="course-image-group">
        <div className="image-box">
          <img src={cloudComputingImg} alt="Cloud Computing" />
          <p className="img-label">AI/ML</p>
        </div>
       
      </div>
    </div>
  );
}

export default AimlCoursePage;
