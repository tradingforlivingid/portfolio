import React from 'react';
import { Briefcase } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import { cn } from '../../lib/utils';

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Leading the frontend team in rebuilding the core product dashboard. Improved performance by 40% and implemented a new design system."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Creative Digital Agency",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client websites using React and Node.js. Collaborated closely with designers to implement pixel-perfect UIs."
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Solutions",
    period: "2018 - 2019",
    description: "Assisted in the development of e-commerce platforms. Gained hands-on experience with modern web technologies and agile methodologies."
  }
];

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-600">My professional journey in the tech industry.</p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={cn(
                "relative flex flex-col md:flex-row gap-8 items-start md:items-center",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full ring-4 ring-white z-10" />
                
                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <AnimatedSection 
                    delay={index * 0.2}
                    className={cn(
                      "bg-white p-6 rounded-xl shadow-md border border-gray-100 relative hover:shadow-lg transition-shadow",
                      index % 2 === 0 ? "text-left" : "text-left md:text-right"
                    )}
                  >
                    <div className={cn(
                      "flex items-center gap-2 mb-2 text-primary-600 font-medium",
                      index % 2 === 0 ? "" : "md:flex-row-reverse"
                    )}>
                      <Briefcase size={18} />
                      <span>{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <h4 className="text-lg text-gray-700 mb-3">{exp.company}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </AnimatedSection>
                </div>
                
                {/* Empty Space for alignment */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
