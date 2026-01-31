import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';
import AnimatedSection from '../common/AnimatedSection';

const PersonalInfo: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div 
            className="w-full md:w-1/3 flex justify-center"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=developer%20working%20on%20laptop%20in%20modern%20office%20minimalist%20style&image_size=square" 
                alt="Working on laptop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-600/10 mix-blend-overlay" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div 
            className="w-full md:w-2/3"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-primary-600">Me</span>
              </h2>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                I'm a passionate Full Stack Developer based in New York.
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 5 years of experience in web development, I have a strong foundation in creating user-centric digital solutions. My journey started with a curiosity about how websites work, which quickly turned into a career passion.
                </p>
                <p>
                  I specialize in building responsive, accessible, and performant web applications using modern technologies like React, TypeScript, and Node.js. I believe in clean code, intuitive design, and continuous learning.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new coffee shops, reading about the latest tech trends, or contributing to open-source projects.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">5+</div>
                  <div className="text-sm text-gray-500">Years Exp.</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">20+</div>
                  <div className="text-sm text-gray-500">Clients</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </div>
            </AnimatedSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
