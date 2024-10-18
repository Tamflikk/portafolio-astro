import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (index) => {
    setCurrentProject(projects[index]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Expose the openModal function to the global scope
  React.useEffect(() => {
    window.openProjectModal = openModal;
  }, []);

  return (
    <AnimatePresence>
      {isOpen && currentProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-gray-800 rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-100">
              {currentProject.title}
            </h2>
            <p className="text-gray-300 mb-4">
              {currentProject.fullDescription}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {currentProject.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${currentProject.title} ${index + 1}`}
                  className="w-full h-40 object-cover rounded"
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {currentProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-700 text-gray-100 px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
