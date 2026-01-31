import React from 'react';
import PersonalInfo from '../components/about/PersonalInfo';
import ExperienceTimeline from '../components/about/ExperienceTimeline';
import Education from '../components/about/Education';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <PersonalInfo />
      <ExperienceTimeline />
      <Education />
    </div>
  );
};

export default About;
