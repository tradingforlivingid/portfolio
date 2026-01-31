import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2014 - 2018",
    description: "Focus on Software Engineering and Data Structures. Graduated with Honors."
  },
  {
    degree: "Full Stack Development Bootcamp",
    institution: "Code Academy",
    year: "2018",
    description: "Intensive 12-week program covering React, Node.js, and Database Design."
  }
];

const certifications = [
  "AWS Certified Developer - Associate",
  "Google UX Design Professional Certificate",
  "Meta Front-End Developer Professional Certificate"
];

const Education: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <AnimatedSection className="mb-8 flex items-center gap-3">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </AnimatedSection>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 0.1}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-primary-200 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{edu.degree}</h3>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <AnimatedSection className="mb-8 flex items-center gap-3">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                <Award size={24} />
              </div>
              <h2 className="text-2xl font-bold">Certifications</h2>
            </AnimatedSection>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 0.1}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-medium text-gray-800">{cert}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;
