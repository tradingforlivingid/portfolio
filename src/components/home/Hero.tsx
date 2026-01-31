import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../common/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 font-medium text-sm">
              Available for freelance work
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Alex Designer</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              A passionate Frontend Developer & UI/UX Designer crafting beautiful, user-friendly digital experiences with modern technologies.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button href="/projects" size="lg" className="w-full sm:w-auto group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" isExternal href="/resume.pdf">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full opacity-20 blur-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20developer%20portrait%20minimalist%20avatar%20flat%20design%20vector&image_size=square" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -left-4 top-1/4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">R</div>
                  <div>
                    <p className="text-sm font-bold">React Developer</p>
                    <p className="text-xs text-gray-500">5+ Years Exp</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">UI</div>
                  <div>
                    <p className="text-sm font-bold">UI/UX Design</p>
                    <p className="text-xs text-gray-500">Pixel Perfect</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
