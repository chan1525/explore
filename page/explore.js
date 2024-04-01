// explore.js

import React from 'react';
import './explore.css';

const Explore = () => {
  return (
    <div className="explore-grid">
      <div className="box finance">
        <div className="content">
          <span>Finance</span>
        </div>
      </div>
      <div className="box sites">
        <div className="content">
          <span>Sites</span>
        </div>
      </div>
      <div className="box houses">
        <div className="content">
          <span>Houses</span>
        </div>
      </div>
      <div className="box buildings">
        <div className="content">
          <span>Buildings</span>
        </div>
      </div>
      <div className="box contractors">
        <div className="content">
          <span>Contractors</span>
        </div>
      </div>
      <div className="box workers">
        <div className="content">
          <span>Workers</span>
        </div>
      </div>
      <div className="box maintenance">
        <div className="content">
          <span>Maintenance</span>
        </div>
      </div>
      <div className="box legal-team">
        <div className="content">
          <span>Legal Team</span>
        </div>
      </div>
      <div className="box contact-us">
        <div className="content">
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
}

export default Explore;
