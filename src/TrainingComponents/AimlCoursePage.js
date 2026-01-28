import React from 'react';
import cloudComputingImg from '../assets/aiml.png';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function AimlCoursePage() {
      const navigate = useNavigate();

  return (
    <div className="media-page">

      <section className="media-section accent-aiml">
        <div className="media-image">
          <img src={cloudComputingImg} alt="AI ML Course" />
        </div>

        <div className="media-content">
          <span className="media-tag">Edge AI & Machine Learning</span>

          <h2>Edge AI</h2>
          <p>
            The AI/ML Foundations program is designed to provide a strong end-to-end
            understanding of modern computing technologies, data-driven systems,
            and intelligent application development. This course blends core
            programming, cloud infrastructure, automation, data analytics, and
            machine learning concepts to prepare learners for real-world AI and
            software engineering roles.
          </p>

          <h2>Core Topics</h2>
          <ul>
            <li><strong>Cloud Computing:</strong> AWS, GCP, Azure, Docker, Kubernetes</li>
            <li><strong>Automation & Scripting:</strong> Workflow & deployment automation</li>
            <li><strong>CI/CD Pipelines:</strong> Version control, testing & delivery</li>
            <li><strong>Programming:</strong> Python, C++, Java fundamentals</li>
            <li><strong>Data Analytics:</strong> Analysis & dashboards (Power BI)</li>
            <li><strong>Machine Learning:</strong> Supervised & unsupervised learning</li>
            <li><strong>Regression & ML Algorithms:</strong> Classification & clustering</li>
            <li><strong>Deep Learning:</strong> Neural networks & optimization</li>
            <li><strong>ANN / CNN / RNN:</strong> Vision & sequential modeling</li>
            <li><strong>LSTM:</strong> Time-series & language modeling</li>
            <li><strong>NLP:</strong> Text analytics & language models</li>
          </ul>
            <button
            className="hero-btn"
            onClick={() => navigate("/contactus")}
          >
          Reach us for More details
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
}

export default AimlCoursePage;
