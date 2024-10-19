import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImagePreview = ({ image, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={(e) => {
        e.stopPropagation(); // Evita que el click se propague al modal principal
        onClose();
      }}
    >
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <img
          src={image}
          alt="Preview"
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()} // Evita que el click en la imagen la cierre
        />
        <button
          onClick={(e) => {
            e.stopPropagation(); // Evita que el click se propague
            onClose();
          }}
          className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setCurrentProject(projects[index]);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-40"
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
                  className="w-full h-40 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(img);
                  }}
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

          <AnimatePresence>
            {selectedImage && (
              <ImagePreview
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;