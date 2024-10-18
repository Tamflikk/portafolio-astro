import React from 'react';
import { motion } from 'framer-motion';

const AnimatedImage = ({ src, alt }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="rounded-full w-64 h-64 object-cover shadow-lg"
    />
  );
};

export default AnimatedImage;