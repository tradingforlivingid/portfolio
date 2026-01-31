import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import ProjectCard, { Project } from './ProjectCard';
import AnimatedSection from '../common/AnimatedSection';

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Web App",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20dashboard%20ui%20design%20dark%20mode%20analytics&image_size=landscape_4_3",
    description: "A comprehensive analytics dashboard for online store owners to track sales, inventory, and customer insights.",
    techStack: ["React", "TypeScript", "Tailwind", "Recharts"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Travel Companion App",
    category: "Mobile App",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=mobile%20app%20travel%20interface%20clean%20design%20mockup&image_size=landscape_4_3",
    description: "A mobile application helping travelers plan trips, find local attractions, and manage bookings.",
    techStack: ["React Native", "Expo", "Firebase"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Finance Tracker",
    category: "Web App",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=finance%20app%20interface%20clean%20modern%20banking&image_size=landscape_4_3",
    description: "Personal finance management tool with budget planning and expense tracking features.",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Portfolio Website Design",
    category: "Design",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimalist%20portfolio%20website%20design%20mockup&image_size=landscape_4_3",
    description: "Modern and minimalist portfolio design for creative professionals.",
    techStack: ["Figma", "UI/UX", "Prototyping"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Social Media Analytics",
    category: "Web App",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=social%20media%20analytics%20dashboard%20colorful%20graphs&image_size=landscape_4_3",
    description: "Platform to analyze social media performance across multiple channels.",
    techStack: ["Vue.js", "D3.js", "Node.js"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Health & Fitness App",
    category: "Mobile App",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=fitness%20app%20mobile%20ui%20workout%20tracking&image_size=landscape_4_3",
    description: "Activity tracking application with workout plans and progress monitoring.",
    techStack: ["Flutter", "Dart", "Firebase"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const categories = ["All", "Web App", "Mobile App", "Design"];

const ProjectGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Filter by category to see specific types of work.
          </p>
        </AnimatedSection>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;
