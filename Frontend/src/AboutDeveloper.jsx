import React from 'react';
import myPhoto from './assets/AboutDevelpor.jpg';

import './AboutDeveloper.css';

const AboutDeveloper = () => {
  return (
    <div className="about-developer container-fluid p-0 m-0">
      <h2 className="text-center mb-4" style={{ color: '#007bff' }}>About the Developer</h2>
      <div className="row align-items-center">
        {/* Photo Section */}
        <div className="col-md-4 text-center">
          <img src={myPhoto} className="developer-photo" alt="Developer" />  {/* Use myPhoto here */}
        </div>

        {/* Text Section */}
        <div className="col-md-8">
          <p className="lead">
            Hello! I'm <strong>Priyank</strong>, a passionate React Developer...
          </p>
          <p>
            My goal is to build applications that not only function well but also provide delightful user interactions...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;

