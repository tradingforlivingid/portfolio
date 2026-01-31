import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, CONTACT_INFO } from '../../utils/constants';

const SocialLinks: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
        <p className="text-gray-600 mb-8">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 text-gray-700">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Me</p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium hover:text-primary-600 transition-colors">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-gray-700">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Me</p>
              <a href={`tel:${CONTACT_INFO.phone}`} className="font-medium hover:text-primary-600 transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-gray-700">
            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Location</p>
              <p className="font-medium">{CONTACT_INFO.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-4">Follow Me</h4>
        <div className="flex space-x-4">
          <SocialIcon href={SOCIAL_LINKS.github} icon={<Github size={20} />} label="GitHub" />
          <SocialIcon href={SOCIAL_LINKS.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialIcon href={SOCIAL_LINKS.twitter} icon={<Twitter size={20} />} label="Twitter" />
          <SocialIcon href={SOCIAL_LINKS.instagram} icon={<Instagram size={20} />} label="Instagram" />
        </div>
      </div>
    </div>
  );
};

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-colors"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
};

export default SocialLinks;
