import React from 'react';
import cloudComputingImg from '../assets/aiml.png';

function AimlCoursePage() {
  return (
    <div className="course-detail-container">
      {/* LEFT: Text Section */}
      <div className="course-text">
        <h2>Edge AI</h2>
        <p>
          The AI/ML Foundations program is designed to provide a strong end-to-end
          understanding of modern computing technologies, data-driven systems,
          and intelligent application development. This course blends core
          programming, cloud infrastructure, automation, data analytics, and
          machine learning concepts to prepare learners for real-world AI and
          software engineering roles.
        </p>

        <h3>Core Topics:</h3>
        <ul>
          <li>
            <strong>Cloud Computing:</strong> Fundamentals and hands-on exposure to
            AWS, Google Cloud Platform (GCP), and Microsoft Azure, including cloud
            architecture, virtual machines, storage services, and containerization
            tools such as Docker and Kubernetes.
          </li>

          <li>
            <strong>Automation & Scripting:</strong> Writing efficient scripts to
            automate system tasks, workflows, and deployments using industry-standard
            scripting techniques.
          </li>

          <li>
            <strong>CI/CD Pipelines:</strong> Understanding continuous integration
            and continuous deployment concepts, version control, automated testing,
            and deployment strategies for scalable applications.
          </li>

          <li>
            <strong>Programming Fundamentals:</strong> Core programming concepts
            using Python, along with exposure to object-oriented programming in
            C++ and Java for performance-oriented and enterprise applications.
          </li>

          <li>
            <strong>Data Analytics & Visualization:</strong> Working with structured
            data, performing analysis, and creating insightful dashboards using
            Power BI and analytical tools.
          </li>

          <li>
            <strong>Artificial Intelligence & Machine Learning:</strong> Introduction
            to AI concepts, supervised and unsupervised learning techniques, and
            real-world machine learning workflows.
          </li>

          <li>
            <strong>Regression & ML Algorithms:</strong> Linear and logistic regression,
            classification techniques, clustering, and algorithm performance evaluation.
          </li>

          <li>
            <strong>Deep Learning:</strong> Understanding deep neural networks,
            backpropagation, activation functions, and optimization techniques.
          </li>

          <li>
            <strong>Neural Network Architectures:</strong> Detailed study of Artificial
            Neural Networks (ANN), Convolutional Neural Networks (CNN) for image
            processing, and Recurrent Neural Networks (RNN) for sequential data.
          </li>

          <li>
            <strong>LSTM Networks:</strong> Advanced sequence modeling using Long
            Short-Term Memory networks for time-series analysis and language modeling.
          </li>

          <li>
            <strong>Natural Language Processing (NLP):</strong> Text preprocessing,
            feature extraction, sentiment analysis, and language modeling techniques
            used in modern AI applications.
          </li>
        </ul>
      </div>

      {/* RIGHT: Image Section */}
      <div className="course-image-group">
        <div className="image-box">
          <img src={cloudComputingImg} alt="AI ML Course" />
          <p className="img-label">AI / Machine Learning</p>
        </div>
      </div>
    </div>
  );
}

export default AimlCoursePage;
