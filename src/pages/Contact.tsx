import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';
import AnimatedSection from '../components/common/AnimatedSection';

const Contact: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSection delay={0.2} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <SocialLinks />
          </AnimatedSection>
          
          <AnimatedSection delay={0.4} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
