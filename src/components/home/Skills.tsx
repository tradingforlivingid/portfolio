import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import { Code, Layout, Database, Terminal, Palette, Globe } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-blue-500" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
  },
  {
    category: "Backend & Database",
    icon: <Database className="w-8 h-8 text-green-500" />,
    items: ["Node.js", "Express", "PostgreSQL", "Supabase", "MongoDB"]
  },
  {
    category: "UI/UX Design",
    icon: <Palette className="w-8 h-8 text-purple-500" />,
    items: ["Figma", "Adobe XD", "Prototyping", "Wireframing", "User Research"]
  },
  {
    category: "Tools & DevOps",
    icon: <Terminal className="w-8 h-8 text-orange-500" />,
    items: ["Git", "Docker", "AWS", "CI/CD", "Vercel"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build high-quality, scalable applications.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.1}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
