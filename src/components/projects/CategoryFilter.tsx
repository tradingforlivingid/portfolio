import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            "relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none",
            activeCategory === category
              ? "text-white"
              : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
          )}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
              initial={false}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
